type Conn = {
    username: string,
    password: string,
    host: string,
    port: string,
    dbname: string
};

type DadosConexao = {
    driver: string,
    url: string
};

const conexao = (dados: Conn): Readonly<DadosConexao> => {
    const { username, password, host, port, dbname } = dados;
    return {
        driver: 'postgres',
        url: `postgresql://${username}:${password}@${host}:${port}/${dbname}`
    };
};