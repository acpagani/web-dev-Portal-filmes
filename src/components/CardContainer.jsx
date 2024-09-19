export default function CardContainer({ titulo, children }) {
    return(
        <div>
            <h1>{ titulo }</h1>
            <div className="flex gap-8 p-8">
                {children}
            </div>
        </div>
    )
}