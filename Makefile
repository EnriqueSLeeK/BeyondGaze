
run: docker-compose.yml
	sudo docker-compose up --detach

build-run: docker-compose.yml
	sudo docker-compose up --build --detach

buildback: docker-compose.yml
	sudo docker-compose up --build --detach backend

buildfront: docker-composer.yml
	sudo docker-compose up --build --detach frontend

down:
	sudo docker-compose down

prune:
	sudo docker system prune
