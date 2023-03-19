package main

import (
	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	// app.Get("/", func(c *fiber.Ctx) error {
	// 	return c.SendString("witaj świecie")
	// })

	app.Static("/assets", "./frontend/dist/assets/")

	app.Get("/", func(c *fiber.Ctx) error {
		return c.Render("frontend/dist/index.html", nil)
	})

	app.Listen(":3000")
}