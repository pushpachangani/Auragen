import json
from app.config.settings import settings
from app.models.generation import UISchema, WizardStep

class GenerateService:
    """Service responsible for AI UI Schema generation."""

    @staticmethod
    def generate_ui_schema(
        current_field: str,
        entered_data: dict,
    ) -> dict:
        """
        Generate a structured JSON UI Schema from LLM or fallback.
        """
        fallback_schema = {
            "steps": [
                {
                    "step": 1,
                    "title": "Basic Details",
                    "description": "Let's start with your basic information to get you set up.",
                    "fields": ["Full legal name", "Employee ID"]
                },
                {
                    "step": 2,
                    "title": "Employment & Tax Info",
                    "description": "Enter your work department and tax details.",
                    "fields": ["Employment type", "Department", "Tax identification number"]
                },
                {
                    "step": 3,
                    "title": "Financial Details & Verification",
                    "description": "Finally, provide your income details and supporting documents.",
                    "fields": ["Annual gross income", "Income source", "Residential address", "Bank account number", "Supporting document reference"]
                }
            ]
        }

        if not settings.OPENAI_API_KEY:
            print("OPENAI_API_KEY is not configured. Using deterministic fallback schema.")
            return fallback_schema

        try:
            from openai import OpenAI
            client = OpenAI(api_key=settings.OPENAI_API_KEY)

            user_prompt = f"Current Field: {current_field}\nEntered Data: {json.dumps(entered_data)}"

            system_prompt = """You are AuraGen AI, an adaptive UI generator.
Your task is to analyze the user's current form completion context and partition a dense 10-field form into a user-friendly, multi-step guided wizard layout (JSON schema) that reduces cognitive friction.

The 10 available fields in the original form are:
1. Full legal name
2. Employee ID
3. Tax identification number
4. Annual gross income
5. Income source
6. Residential address
7. Employment type
8. Department
9. Bank account number
10. Supporting document reference

User Context:
- Current Field: The field the user was interacting with when friction was detected.
- Entered Data: A JSON object of the fields the user has already typed into (DO NOT lose these fields; they must be included in the wizard steps so the user's progress is preserved).

Allowed wizard JSON schema layout constraints:
- Return ONLY a valid JSON object. Do NOT wrap it in markdown block fences.
- The JSON object must contain a single key "steps" which is a list of step objects.
- Each step object must have:
  - "step": integer (1-indexed step number)
  - "title": a short, encouraging title for the step
  - "description": a brief, helpful explanation
  - "fields": a list of field names (must be chosen exactly from the 10 available fields list above)

- Ensure the field the user was stuck on (Current Field) is grouped in an early, simplified step with very few fields (e.g. 1 or 2 fields) to relieve immediate friction.
- All 10 fields must be distributed across the steps.
- Do NOT output any additional text or explanation. Only output the JSON.
"""

            response = client.chat.completions.create(
                model="gpt-4o",
                messages=[
                    {"role": "system", "content": system_prompt},
                    {"role": "user", "content": user_prompt}
                ],
                temperature=0.2,
                response_format={"type": "json_object"}
            )

            result_text = response.choices[0].message.content
            print("AI Raw Response:", result_text)
            parsed_json = json.loads(result_text)

            # Validate structural content
            validated = UISchema(**parsed_json)
            return validated.dict()

        except Exception as e:
            print(f"Error in LLM Generation: {e}. Falling back to default schema.")
            return fallback_schema

    @staticmethod
    def generate_component(request) -> dict:
        """
        Maintains compatibility with legacy stubs.
        """
        return {
            "success": True,
            "message": "Component generated successfully (legacy endpoint stub)"
        }