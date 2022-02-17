<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel=stylesheet href="{{ mix('css/app.css') }}" />
    <link rel=stylesheet href="{{ asset('css/tailwind.css') }}" />
    <title>Document</title>
</head>
<body>
    <div id="app">
        <h1>Bienvenue sur la page de mon app</h1>
        <app-component ></app-component>
    </div>
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>

