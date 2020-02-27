cd /home/ubuntu/cg-frontend
pm2 start --name cg-front "serve -l 3000 -s dist"