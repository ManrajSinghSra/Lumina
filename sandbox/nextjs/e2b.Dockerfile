FROM node:21-slim

RUN apt-get update && apt-get install -y curl && apt-get clean && rm -rf /var/lib/apt/lists/*

COPY c.sh /c.sh
RUN chmod +x /c.sh

WORKDIR /home/user/next

RUN npx --yes create-next-app@latest . --yes

RUN npx --yes shadcn@latest init --yes -b neutral --force
RUN npx --yes shadcn@latest add --all --yes

RUN mv /home/user/next/* /home/user/ && rm -rf /home/user/next
