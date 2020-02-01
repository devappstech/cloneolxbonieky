import React from 'react';
import { Link} from 'react-router-dom'

const Page = () => {
    return (
        <div>Pagina não encontrada
        <Link to = "/">Voltar para home</Link>
        </div>
    );
}

export default Page;