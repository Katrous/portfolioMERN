package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// Task represents a to-do item
type Task struct {
	ID        int
	Title     string
	Completed bool
}

var tasks []Task
var nextID int = 1

func main() {
	scanner := bufio.NewScanner(os.Stdin)

	for {
		fmt.Println("\n--- TO-DO LIST MENU ---")
		fmt.Println("1. Add Task")
		fmt.Println("2. List Tasks")
		fmt.Println("3. Mark Task as Completed")
		fmt.Println("4. Delete Task")
		fmt.Println("5. Exit")
		fmt.Print("Choose an option: ")

		scanner.Scan()
		choice := scanner.Text()

		switch choice {
		case "1":
			addTask(scanner)
		case "2":
			listTasks()
		case "3":
			markTaskCompleted(scanner)
		case "4":
			deleteTask(scanner)
		case "5":
			fmt.Println("Exiting...")
			return
		default:
			fmt.Println("Invalid option. Try again.")
		}
	}
}

func addTask(scanner *bufio.Scanner) {
	fmt.Print("Enter task title: ")
	scanner.Scan()
	title := scanner.Text()

	task := Task{
		ID:        nextID,
		Title:     title,
		Completed: false,
	}
	nextID++
	tasks = append(tasks, task)
	fmt.Println("Task added.")
}

func listTasks() {
	if len(tasks) == 0 {
		fmt.Println("No tasks.")
		return
	}
	for _, task := range tasks {
		status := "❌"
		if task.Completed {
			status = "✅"
		}
		fmt.Printf("[%d] %s %s\n", task.ID, status, task.Title)
	}
}

func markTaskCompleted(scanner *bufio.Scanner) {
	fmt.Print("Enter task ID to mark as completed: ")
	scanner.Scan()
	idStr := scanner.Text()
	id, err := strconv.Atoi(idStr)
	if err != nil {
		fmt.Println("Invalid ID.")
		return
	}
	for i, task := range tasks {
		if task.ID == id {
			tasks[i].Completed = true
			fmt.Println("Task marked as completed.")
			return
		}
	}
	fmt.Println("Task not found.")
}

func deleteTask(scanner *bufio.Scanner) {
	fmt.Print("Enter task ID to delete: ")
	scanner.Scan()
	idStr := scanner.Text()
	id, err := strconv.Atoi(idStr)
	if err != nil {
		fmt.Println("Invalid ID.")
		return
	}
	for i, task := range tasks {
		if task.ID == id {
			tasks = append(tasks[:i], tasks[i+1:]...)
			fmt.Println("Task deleted.")
			return
		}
	}
	fmt.Println("Task not found.")
}
