package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"todo/controllers"
)

func main() {
	app := fiber.New()
	app.Static("/assets", "./frontend/dist/assets/")

	frontendRoutes := []string {
		"/",
		"/about",
	}

	// app.Get("/", controllers.Home)

	for _, route := range frontendRoutes {
		app.Get(route, controllers.Home)
	}

	// Get Todo List

	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:3000, http://localhost:5173",
		AllowHeaders: "Origin, Content-Type, Accept",
	}))
	
	api := app.Group("/api")

	api.Get("/todosList", controllers.TodosList)

	app.Listen(":3000")
}