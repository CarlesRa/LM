# Electron(Práctica 1)

## HTML
```html
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="./main.css">
	<style type="text/css">
		
	</style>
</head>
<body>
	<div class="container">
		<div class="header">
			Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto mas de todo demas. 
            Es lo mas bonito del mundo pòrque no tienes que escribir tu mismo el contenido.
		</div>
			<div class="container2">
				<div class="textLeft">
				Lorem ipsum dolor sit amet consectetur adipiscing elit aliquet blandit, convallis class gravida 
                in consequat morbi nisl proin porttitor, enim nulla natoque elementum potenti commodo sagittis feugiat. 
                Sociis convallis pharetra lacinia ullamcorper interdum, fermentum fringilla erat est. Viverra cubilia 
                pellentesque libero diam in vulputate, hendrerit sagittis montes torquent ultricies, mus velit erat fringilla
                lectus.
				Sociis convallis pharetra lacinia ullamcorper interdum, fermentum fringilla erat est. Viverra cubilia 
                pellentesque libero diam in vulputate, hendrerit sagittis montes torquent ultricies, mus velit erat fringilla 
                lectus.
			</div>	
			<div class="textCenter">
				Lorem ipsum dolor sit amet consectetur adipiscing elit aliquet blandit, convallis class gravida in consequat 
                morbi nisl proin porttitor, enim nulla natoque elementum potenti commodo sagittis feugiat. Sociis convallis 
                pharetra lacinia ullamcorper interdum, fermentum fringilla erat est. Viverra cubilia pellentesque libero diam 
                in vulputate, hendrerit sagittis montes torquent ultricies, mus velit erat fringilla lectus.
				Sociis convallis pharetra lacinia ullamcorper interdum, fermentum fringilla erat est. Viverra cubilia 
                pellentesque libero diam in vulputate, hendrerit sagittis montes torquent ultricies, mus velit erat fringilla 
                lectus.
			</div>
			<div class ="textRight">
				Lorem ipsum dolor sit amet consectetur adipiscing elit aliquet blandit, convallis class gravida in consequat
                morbi nisl proin porttitor, enim nulla natoque elementum potenti commodo sagittis feugiat. Sociis convallis 
                pharetra lacinia ullamcorper interdum, fermentum fringilla erat est. Viverra cubilia pellentesque libero diam 
                in vulputate, hendrerit sagittis montes torquent ultricies, mus velit erat fringilla lectus.
				Sociis convallis pharetra lacinia ullamcorper interdum, fermentum fringilla erat est. Viverra cubilia
                pellentesque libero diam in vulputate, hendrerit sagittis montes torquent ultricies, mus velit erat fringilla 
                lectus.
			</div>
		</div>
		<div class="boton">
			Return Home
		</div>
	</div>
	
</body>
</html>
```

## CSS
```css
.container{
	margin: 0 auto;
	height: 600px;
	width: 900px;
	background-color: #b3ccff;	
	flex-direction: row;
	font-family: arial, sans-serif;
}
.header{
	 padding: 20px;
	 height: 30px;
	 width: 880px;
}
.container2{
	font-family: arial, sans-serif;
	display: flex;
	justify-content: space-around;
	text-align: left;
}
.textLeft{
	height: 400px;
	width: 230px;
	background-color: white;
	padding: 20px;
	border-radius: 10px;
}
.textCenter{
	height: 400px;
	width: 230px;
	background-color: white;
	padding: 20px;
	border-radius: 10px;
}
.textRight{
	height: 400px;
	width: 230px;
	background-color: white;
	padding: 20px;
	border-radius: 10px;
}
.boton{
	text-align: center;
	margin-top: 40px;
	margin-left: 400px;
	display: inline-block;
	border: 1px solid #2e518b; 
	padding: 10px; 
	background-color: #2e518b;
	color: #ffffff; 
	text-decoration: none; 
	font-family: 'Helvetica', sans-serif; 
	border-radius:  5px; 
}
```
