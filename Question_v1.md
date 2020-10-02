## Question Version 1

Mr. Banku Yadav has just started with his NGO. During this Covid-19 pandemic, he decided to do a fundraiser to help the people in need. He found a slum nearby named Nayandahalli where he saw people who were in need of food and ration kits.

Before starting with the fundraiser he thought of exploring the slum and thereby conducted a survey. When Banku Yadav reached Nayandahalli he found out that there were a lot of people and collecting each and everyone’s record manually would become a tedious process. So he thought of creating an app that will make his task easier in conducting the survey. Banku Yadav is not a tech-savvy person to build a survey app.

It is your time to rise and shine as you have a golden opportunity to help Banku Yadav create an app for conducting his survey. Refer the sample input and output examples given below to create your app.

### Inputs

App should allow the user to fill **multiple surveys for multiple users**. Input can be in any format or variation but it must include the following.

- Aadhar Card Number:
- Name:
- Gender: (3 Options: Male, Female, Other)
- Age:
- How much rice in grams he/she eats per day?:
- How much dal in grams he/she eats per day?:
- Any 2 special food item required to be chosen from choices: (choices should be based on Age & Gender selected)

| Age Group                            | Special Food Options                                                           |
| ------------------------------------ | ------------------------------------------------------------------------------ |
| Infants: Below 2years                | Cerelac, Amul powder, Nandini Milk TetraPacks                                  |
| Children: Between 3 to 18 years      | Bread, Tiger/Parle G, Nandini Milk TetraPacks, Canned Fruits, Canned Veggies   |
| Old Age: Above 70 years              | Canned Fruits, Canned Veggies, Nandini Milk TetraPacks, Medicine Packs         |
| Adult Female: Between 18 to 69 years | Canned Fruits, Canned Veggies, Nandini Milk TetraPacks, Calcium Sandoz Tablets |
| Adult Male: Between 18 to 69 years   | Canned Fruits, Canned Veggies, Nandini Milk TetraPacks                         |
| Adult Other: Between 18 to 69 years  | Canned Fruits, Canned Veggies, Nandini Milk TetraPacks, Calcium Sandoz Tablets |

### Output

#### Person Info:

| Age Group                            | No. of People |
| ------------------------------------ | ------------- |
| Infants: Below 2years                | ?             |
| Children: Between 3 to 18 years      | ?             |
| Old Age: Above 70 years              | ?             |
| Adult Female: Between 18 to 69 years | ?             |
| Adult Male: Between 18 to 69 years   | ?             |
| Adult Other: Between 18 to 69 years  | ?             |

#### Food Info:

| Food Item               | Required Quantity |
| ----------------------- | ----------------- |
| Rice in Kg per day      | ?                 |
| Dal in Kg per day       | ?                 |
| Cerelac                 | ?                 |
| Amul powder             | ?                 |
| Nandini Milk TetraPacks | ?                 |
| Bread                   | ?                 |
| Tiger/Parle G Biscuits  | ?                 |
| Canned Veggies          | ?                 |
| Canned Fruits           | ?                 |
| Medicine Packs          | ?                 |
| Calcium Sandoz Tablets  | ?                 |

### Note:

> - **Person Info Table** should display the number of people as per their age category.
> - In the **Food Info Table**, the **Required Quantity** is the sum of number of food items(in kg or number of units) selected by each individual on taking the Survey.
