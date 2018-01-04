=begin
Title:  [easy] challenge #1
Text:  create a program that will ask the users name, age, and reddit username. have it tell them the information back, in the format:

    your name is (blank), you are (blank) years old, and your username is (blank)

for extra credit, have the program log this information in a file to be accessed later.

=end
def stalker(name, age, userName)
    string = "your name is #{name}, you are #{age} years old, and your username is #{userName}"
    return string
end



puts("Whats your name?")
name = gets.chomp
puts("Whats your age?")
age = gets.chomp
puts("Whats your Reddit user name?")
userName = gets.chomp

puts(stalker(name, age, userName))
