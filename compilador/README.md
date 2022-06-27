# Compilador de Markdown

## Regras das palavras-chave
Regras que definem como são as palavras-chave usadas para criarem páginas html

- Iniciam com "#"
- Após o "#", deve-se usar uma letra
- Não possuem espaço
- Não possuem acento
- Não possuem caracteres especiais
- Exceção para caracteres especiais:
    - Símbolo "-"

Obs.: Letras maiúsculas e minúsculas não são diferenciadas, mas por convenção, usa-se letras maiúsculas para palavras-chave

### Exemplos de palavra-chave
```
#PAGINA
#TITULO
#TEXTO
#VIDEO
#AUDIO
#PALAVRA-CHAVE
```

## Argumentos
Algumas palavras chave possuem argumentos, que são dados fornecidos para compor o elemento criado para a página Web;

Eles são usados após a palavra-chave, dando um espaço entre a palavra-chave e o 1º argumento, e um espaço entre cada argumento.

### Exemplos de uso de argumentos
```
#VIDEO link-para-o-video
#AUDIO caminho-para-o-arquivo.mp4
#VIDEO link-para-o-video outro-link-para-o-video.mp4
```

## Palavra-chave disponíveis e seus argumentos

### Título
#TITULO `<conteúdo do título>`
```
#TITULO Conteúdo do título
```

### Texto
#TEXTO `<conteúdo do texto>`
```
#TEXTO Conteúdo do texto
```

### Página
#PAGINA `<link>` `<texto exibido>`
```
#PAGINA caminho/próxima/página.html Ir para próxima página
```

### Vídeo
#VIDEO `<caminho do arquivo>`
#VIDEO `<HTML de vídeo incorporado>`
```
#VIDEO caminho/para/o/video.mp4
#VIDEO <iframe ...></iframe>
```

### Áudio
#AUDIO `<caminho do arquivo>`
```
#AUDIO caminho/para/o/audio.mp3
```
