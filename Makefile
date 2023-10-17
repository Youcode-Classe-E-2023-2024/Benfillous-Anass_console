run: compile
	@./main

compile: main
	@gcc -o main *.o

main: library
	@gcc -c -g main.c main.h

library:
	@gcc -c -g lib/*.c lib/*.h

clean:
	@rm main .*.swp .*/*.swp *.h.gch */*h.gch *.o .*.c.swp .*/*.c.swp

push: commit
	git push

commit: add
	git commit -m "$(M)"

add: pull
	git add .

pull: fetch
	git pull

fetch:
	git fetch
