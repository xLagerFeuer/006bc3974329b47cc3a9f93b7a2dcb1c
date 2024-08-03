# Telegram bot


## Installation

```bash
echo -n "TG_API_KEY" | base64
```

Type this response into 01-secret.yaml

```bash
docker build -t python-bot:latest .
```

```bash
kubectl apply -f 01-secret.yaml
```

```bash
kubectl apply -f 02-deployment.yaml
```

