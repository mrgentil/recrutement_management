<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Vérification l'e-mail</title>
</head>
<body>
<h2>Cher <span>{{$details['name']}}</span></h2>
<p>Nous vous demandons de vérifier votre adresse e-mail. Veuillez cliquer sur le lien ci-dessous pour vérifier votre compte.</p>
<a href="http://127.0.0.1:8000/auth/verify/{{$details['token']}}/{{$details['hashEmail']}}">Vérifier ici</a>
<br><br><br>
<p>Merci</p>
</body>
</html>
