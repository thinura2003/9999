FROM x-troidpvtgang/x-troidpvt:latest

RUN git clone https://github.com/X-TroidPVTGang/X-TroidPVT /root/X-TroidPVT
WORKDIR /root/X-TroidPVT/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
