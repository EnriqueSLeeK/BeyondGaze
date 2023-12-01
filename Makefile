
run: docker-compose.yml
	sudo docker-compose up --detach

build-run: docker-compose.yml
	sudo docker-compose up --build --detach

down:
	sudo docker-compose down

prune:
	sudo docker system prune
