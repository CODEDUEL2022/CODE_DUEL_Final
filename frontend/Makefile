.PHONY: dev
dev:
	npm run dev

.PHONY: story
story:
	npm run storybook

.PHONY: mock
mock:
	docker run --rm -it -p 4010:4010 -v "$$(pwd)/../schema:/tmp" stoplight/prism:4 mock -h 0.0.0.0 "/tmp/openAPI.yaml"

.PHONY: gen
gen:
	rm -rf ./api && npx openapi2aspida -i ../schema/openAPI.yaml

.PHONY: plop
plop:
	npm run plop