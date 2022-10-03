<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Verification Email</title>
</head>
<body>
<h2>Cher <span>{{$details['name']}}</span></h2>
<p>Vous avez demandé la réinitialisation de votre mot de passe. Si vous voulez changer votre mot de passe, veuillez cliquer sur le lien suivant</p>
<a href="http://127.0.0.1:8000/auth/forgot-password/{{$details['token']}}/{{$details['hashEmail']}}">Verifier ici</a>
<br><br><br>
<p>Merci</p>
</body>
</html>
