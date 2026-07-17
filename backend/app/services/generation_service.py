from app.models.generate import (
    GenerationRequest,
    GenerationResponse,
    GeneratedComponent,
    PromptMetadata,
)


class GenerateService:
    """Service responsible for AI component generation."""

    @staticmethod
    def generate_component(
        request: GenerationRequest,
    ) -> GenerationResponse:
        """
        Placeholder implementation.
        GPT integration will be added later.
        """

        component = GeneratedComponent(
            component_name="GeneratedComponent",
            code=f"// Generated from prompt: {request.prompt}",
            language="React",
        )

        metadata = PromptMetadata(
            model_name="Placeholder Model",
            processing_time=0.01,
        )

        return GenerationResponse(
            success=True,
            message="Component generated successfully",
            component=component,
            metadata=metadata,
        )