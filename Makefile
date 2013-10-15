MOCHA="node_modules/.bin/mocha"
NODEMON="node_modules/.bin/nodemon"

TESTS=$(shell find test/ -name "*.test.js")

test:
	$(MOCHA) -R spec $(TESTS)

watch:
	$(NODEMON) --watch src --watch test --exec "$(MOCHA) -R spec" $(TESTS)

.PHONY: test watch

