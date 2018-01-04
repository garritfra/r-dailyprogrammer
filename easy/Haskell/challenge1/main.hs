{-
    Title:  [easy] challenge #1
Text:  create a program that will ask the users name, age, and reddit username. have it tell them the information back, in the format:

    your name is (blank), you are (blank) years old, and your username is (blank)

for extra credit, have the program log this information in a file to be accessed later.
-}

import Data.List
import System.IO

evalUser :: String -> String -> String -> String

evalUser name age redditName = ("your name is " ++ name ++ ", you are " ++ age ++ " years old, and your username is " ++ redditName)

main = do
    putStrLn "What's your name?"
    name <- getLine

    putStrLn "What's your age?"
    age <- getLine

    putStrLn "What's your Reddit name?"
    redditName <- getLine

    putStrLn (evalUser name age redditName)
    putStrLn "Press enter to continue..."
    getLine

