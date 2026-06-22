import Link from 'next/link'
import { ReactNode } from 'react'
const menus = {
comprador:['Visão Geral','Explorar','Carrinho','Ordens de Compra','Acompanhar Entregas','Receções','Fornecedores','Minhas Aprovações','Orçamento','Ajuda & Suporte'],
fornecedor:['Central de Negócios','Catálogo de Produtos','Catálogo de Serviços','Ordens de Compra','Faturas','Pagamentos','Entregas','Contratos','Perfil da Empresa','Utilizadores','Centro de Ajuda'],
financeiro:['Centro Financeiro','Aprovações','Faturas','Pagamentos','Ordens de Compra','Orçamento','Fornecedores','Relatórios Financeiros','Auditoria','Ajuda & Suporte'],
admin:['Visão Geral','Utilizadores','Empresas','Fornecedores','Categorias','Seguros','Aprovações','Relatórios','Audit Trail','Configurações'],
fluxos:['Fluxo Geral','Comprador','Fornecedor','Financeiro','Company Admin']
}
const icons=['⌂','⌕','🛒','▣','🚚','□','♙','✓','◔','?']
type Persona = keyof typeof menus
const names: Record<Persona,string> = {comprador:'Carlos Mendes',fornecedor:'João Ndala',financeiro:'Fernando Almeida',admin:'Carlos Admin',fluxos:'KIXIMA'}
export default function Layout({persona,children}:{persona:Persona,children:ReactNode}){const name=names[persona];return <div className="shell"><aside className="sidebar"><div className="brand"><div className="mark">K</div>KIXIMA</div><div className="tag">Procurement Garantido</div><div className="navtitle">{persona==='fluxos'?'Fluxos':'Menu '+persona}</div><nav className="nav">{menus[persona].map((m:string,i:number)=><a className={i===0?'active':''} key={m} href="#"><span>{icons[i%icons.length]}</span>{m}{[3,7].includes(i)&&persona!=='fluxos'?<span className="badge">{i===3?5:3}</span>:null}</a>)}</nav><div className="support"><h3>Precisa de ajuda?</h3><p style={{color:'#cfd4dc',fontSize:13}}>A nossa equipa está disponível para ajudar.</p><button>Falar com Suporte</button></div></aside><main className="main"><header className="top"><div className="search"><input placeholder="Pesquisar ordens, produtos, fornecedores, faturas..."/><button>⌕</button></div><span>🔔</span><span>✉️</span><span>?</span><div className="user"><div className="avatar">{name.split(' ').map(n=>n[0]).join('').slice(0,2)}</div><div><b>{name}</b><br/><small>{persona}</small></div></div></header>{children}</main></div>}
export function KPI({icon,label,value,sub}:{icon:string,label:string,value:string,sub?:string}){return <div className="card kpi"><div className="icon">{icon}</div><div className="label">{label}</div><div className="value">{value}</div>{sub&&<div className="sub">{sub}</div>}</div>}
export function Status({type,children}:{type:'green'|'yellow'|'red'|'blue'|'muted',children:ReactNode}){return <span className={'status '+type}>{children}</span>}
export function Bars(){return <div className="chart">{[55,72,48,88,65,40,75].map((h,i)=><div key={i} className={'bar '+(['','greenbar','yellowbar','bluebar'][i%4])} style={{height:h+'%'}} />)}</div>}
