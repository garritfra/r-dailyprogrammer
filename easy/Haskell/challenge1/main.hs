{-
    Title:  [easy] challenge #1
Text:  create a program that will ask the users name, age, and reddit username. have it tell them the information back, in the format:

    your name is (blank), you are (blank) years old, and your username is (blank)

for extra credit, have the program log this information in a file to be accessed later.
-}

import Data.List
import System.IO

--Initialize name
name = "Garrit" :: String
age = 19 :: Int
redditName = "garritfra" :: String

evalUser name age redditName = "your name is " ++ name ++ ", you are " ++ age ++ " years old, and your username is " ++ redditName