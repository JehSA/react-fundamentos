import { useState } from 'react';


function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault();
        console.log(`Usuário "${name}" foi cadastrado com a senha: ${password}`);
    }

    const [name, setName] = useState();
    const [password, setPassword] = useState();

    return(
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Digite seu nome"
                        onChange={(e) => setName(e.target.value)} 
                    />
                </div>
                <br />
                <div>
                <label htmlFor="password">Senha:</label>
                    <input 
                        type="text" 
                        id="password" 
                        name="password" 
                        placeholder="Digite a sua senha"
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <br />
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    );
}

export default Form;