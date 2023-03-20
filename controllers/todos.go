package controllers

import (
	"github.com/gofiber/fiber/v2"
)

func TodosList(c *fiber.Ctx) error {
	todos := []string{
		"aaa1",
		"bbb2",
		"ccc3",
	}

	c.JSON(todos)
	
	return nil
}