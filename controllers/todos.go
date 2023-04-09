package controllers

import (
	"fmt"
	_ "fmt"

	"github.com/gofiber/fiber/v2"
)

var todos []Todo

type Todo struct {
	Value string
}

func init() {
	first := Todo{Value: "1 pierwszy"}
	todos = append(todos, first)
}

func TodosList(c *fiber.Ctx) error {

	c.JSON(todos)

	return nil
}

func AddTodo(c *fiber.Ctx) error {
	// newTodoTitle := string(c.Request().Header.Peek("newTodoTitle"))

	todo := new(Todo)
	if err := c.BodyParser(todo); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Invalid request body",
		})
	}

	todos = append(todos, *todo)

	fmt.Println(todo)
	c.JSON(todos)
	return nil
}
