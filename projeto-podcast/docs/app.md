# Nome do Aplicativo
Podcast Meneger

# Descrição
Um app ao estilo Netflix, aonde possa centralizar diferentes episódio de podcasts separados por categoria


# Domínio 
Podcasts feitos em vídeo

### Feature
-Listar os podcasts em sessões de categorias
    -[saúde, boybuilder, mentalidade, humor]
-Filtrar episódeos por noe de podcast

## Como

### Feature
- Listar os podcasts em sessões de categorias

### Como vou implementar:
Vou retornar em uma api rest (json) o 
nome podcast, nome do episódio, imagem de capa, link

 ```js
[
{
    podcastName: "flow",
    episode: "CBUM - Flow #319",
    videoId: "pQSuQmUfS30",
    cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
    categories: ["saúde", "esporte", "boybuilder"]
},
{
    podcastName: "flow",
    episode: "RUBENS BARRICHELLO - Flow #339",
    videoId: "4KDGTdiOV4I",
    cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=4KDGTdiOV4I",
    categories: ["esporte", "corrida"]
}
]
```