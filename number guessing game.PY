import random

def guess_the_number():
    secret_number = random.randint(1, 100)
    attempts = 0
    max_attempts = 10

    print("Welcome to Guess the Number!")
    print("I'm thinking of a number between 1 and 100.")

    while attempts < max_attempts:
        print(f"\nAttempt {attempts + 1} of {max_attempts}")
        guess = int(input("Enter your guess: "))

        if guess < secret_number:
            print("Too low! Try a higher number.")
        elif guess > secret_number:
            print("Too high! Try a lower number.")
        else:
            print(f"Congratulations! You guessed the number {secret_number} in {attempts + 1} attempts.")
            return

        attempts += 1

    print(f"\nGame over! You couldn't guess the number. It was {secret_number}.")

guess_the_number()