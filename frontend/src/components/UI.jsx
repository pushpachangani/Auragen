import {motion} from 'framer-motion';
export function Card({title,sub,children,className=''}){return <motion.section initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} className={'card '+className}><div className="card-head"><div><h3>{title}</h3>{sub&&<small>{sub}</small>}</div></div>{children}</motion.section>}
export function Stat({label,value,delta,tone='purple'}){return <div className="stat"><span>{label}</span><strong>{value}</strong><small className={tone}>{delta}</small></div>}
export function Gauge({value,label='Cognitive load'}){return <div className="gauge" style={{'--p':value}}><div><strong>{value}</strong><span>{label}</span></div></div>}
