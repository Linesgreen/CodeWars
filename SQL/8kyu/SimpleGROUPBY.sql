/*For this challenge you need to create 
a simple GROUP BY statement, you want to group 
all the people by their age and count the people 
who have the same age.



people table schema
    id
    name
    age

select table schema
    age [group by]
    people_count (people count) */


SELECT age, COUNT(age) as people_count FROM people
GROUP BY age

age	people_count
8	12
4	11
1	6
5	12
3	9
0	13
9	10
6	8
2	11
7	8