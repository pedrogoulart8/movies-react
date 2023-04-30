## Projeto em React Vite consumindo API do TMDB (que contém informações sobre filmes).
### Tecnolodias utilizadas: React, JavaScript, HTML, CSS

![filmes1](https://user-images.githubusercontent.com/116767490/225633541-64ff9013-f102-451b-b26f-d65ab1a37cc6.png)
![filmes2](https://user-images.githubusercontent.com/116767490/225633550-d33efe81-0b85-429c-b5b8-5da282490d96.png)





## 1 - PAGES

### HOME:

Dentro de Home importei o link onde ficam armazenados os filmes do banco de dados e a chave de acesso da API e , que estão registradas no arquivo '.env':


"const moviesURL = import.meta.env.VITE_API"
"const apiKey = import.meta.env.VITE_API_KEY"

Depois criamos uma função assincrona responsável por buscar no banco de dados os filmes mais bem avaliados (getTopRatedMovies).
Essa função será chamada sempre que a pagina for carregada, pois esses filmes serão os que estarão disponiveis para o usuário na pagina inicial do site. Para esse caso especifico, utilizamos 'useEffect'.

Dentro de useEffect irei criar a const 'topRatedUrl' que será responsável por buscar a url da API onde ficam armazenados os melhores filmes.

Ainda dentro de useEffect chamei a função assincrona 'getTopRatedMovies' e usei como parametro a const agora criada 'topRatedUrl'


    useEffect(() => {

        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`

        getTopRatedMovies(topRatedUrl)

    },[])






### SEARCH

Página onde serão encontrados os filmes buscados pelo usuário.
Para isso utilizei o { useSearchParams } do react router dom, que está representado pela const 'searchParams'.

A const 'query' é responsável por armazenar o que o usuário está buscando, ou seja, tudo após o 'q' na url do navegador

 "const query = searchParams.get("q")"


Assim como a Home, utilizei uma função assincrona pra buscar dados da API e retornar em formato json.

  const getSearchedMovies = async (url) => {

    const res = await fetch(url)
    const data = await res.json()

    setMovies(data.results)

  }

Depois disso usei o 'useEffect' para ser chamado sempre que a 'query' for modificada. 

  useEffect(() => {

    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`

    getSearchedMovies(searchWithQueryURL)

  }, [query])

Quando a query for modificada, o fetch irá buscar novamente no banco de dados o que o usuário está buscando e irá retornar para a tela.



## 2 - COMPONENTS

### MovieCard

Component responsável por buscar, no banco de dados, as imagens dos posters dos filmes selecionados.

'const imageUrl = import.meta.env.VITE_IMG'

Além disso incluí a nota do filme, segundo usuários e um link para detalhes do filme, tudo isso utilizando o parametro de 'movies.map' dentro da Home.

O component foi exportado para a Home.


### Navbar

Component responsável por encontrar o filme que o usuário está buscando.

Utilizei o { useNavigate } para ter funções de navegação dentro do meu component. Para representar esse hook, inseri:

 'const navigate = useNavigate()'



Inseri uma função responsável para direcionar o usuário para o conteúdo que ele está buscando 'handlesubmit'



