
run: docker-compose.yml
	sudo docker-compose up

down:
	sudo docker-compose down

prune:
	sudo docker system prune
