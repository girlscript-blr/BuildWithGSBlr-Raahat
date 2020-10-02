## Final Problem Statement

Mr. Banku Yadav has just started with his NGO. During this Covid-19 pandemic, he decided to do a fundraiser to help the people in need. He found a slum nearby named Nayandahalli where he saw people who were in need of food and ration kits.

Before starting with the fundraiser he thought of exploring the slum and thereby conducted a survey. When Banku Yadav reached Nayandahalli he found out that there were a lot of people and collecting each and everyone’s record manually would become a tedious process. So he thought of creating an app that will make his task easier in conducting the survey. Banku Yadav is not a tech-savvy person to build a survey app.

It is your time to rise and shine as you have a golden opportunity to help Banku Yadav create an app for conducting his survey. Banku Yadav’s app proved to be successful in estimating the quantity of each food item along with its price and the total amount required to be funded based on the total number of people.

The state government noticed Banku Yadav’s efforts and got impressed with his idea. The government wants him to do the same for other slums as well. So Banku Yadav approaches you for updating the app. Now you should automate the Survey App so that records of more slums and a variety of food items can be maintained. While collecting survey records of each individual you should also collect their slum’s name. The app should store details in the form of a database or files.

Your task is to create an App that should support the following functionalities:

**Two types of Users:**

1. **Admin**

   - **Add/Update Slum Records**

     - App should ask the user to fill the **Slum Name** & **Description**(general slum locality address) and details should be stored in a table/file.
     - The Table/file named **Slum Details** should maintain fields/columns like **Id, Slum Name, Description**.
     - App should check if **Name** already exists in the table/file or not. If Slum name already exists, it should just update the record in place of creating a new one to avoid redundancy of records.

   - **Update Food Products with Prices per quantity**

     - App should allow the user to fill **Monthly Food Stock** details like **Product Name, Price & Monthly Quantity**.
       > Here **Monthly Quantity** is the total number of Food item packets to be distributed to an individual for a Month/30 days.
     - The Table/file named **Monthly Food Stock** should maintain fields like **Id, Product Name & Monthly Quantity**.

   - **Estimate Total Quantity of food products & Total Amount Required**

     - **Fetch Food Info By Area Name**: User should just enter the Slum Name and the App should return the following as Output:

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

     | Food Item               | Required Quantity | Monthly Quantity | Price (in Rs.) |
     | ----------------------- | ----------------- | ---------------- | -------------- |
     | Rice in Kg per day      | ?                 | ?                | ?              |
     | Dal in Kg per day       | ?                 | ?                | ?              |
     | Cerelac                 | ?                 | ?                | ?              |
     | Amul powder             | ?                 | ?                | ?              |
     | Nandini Milk TetraPacks | ?                 | ?                | ?              |
     | Bread                   | ?                 | ?                | ?              |
     | Tiger/Parle G Biscuits  | ?                 | ?                | ?              |
     | Canned Veggies          | ?                 | ?                | ?              |
     | Canned Fruits           | ?                 | ?                | ?              |
     | Medicine Packs          | ?                 | ?                | ?              |
     | Calcium Sandoz Tablets  | ?                 | ?                | ?              |

     #### Total Amount Required = Sum of Prices

     ### Note

     > - **Person Info Table** should display the number of people as per their age category.
     > - In the **Food Info Table**, the **Required Quantity** is the sum of number of food items(in kg or number of units) selected by all individual on taking the Survey.
     >   - Calculate the following by referring to the **Monthly Food Stock Table**(as created from above **Update Food Products with Prices per quantity** functionality)
     >     - **Quantity** = Required Quantity as per Survey X No. of Packets per Food Item
     >     - **Price** = Required Quantity X Monthly Quantity X Price from Monthly Food Stock Table
     > - **Total Amount** can be calculated based on the Sum of Prices in the Food Info Table.

     ### Example for Calculating Food Info Table & Total Amount Required

     After taking survey of 3 Individuals we got to know

     - Person A enters or selects
       - 750grams of Rice per day
       - 400grams of Dal per day
       - Nandini Milk TetraPacks
       - Canned Fruits
     - Person B enters or selects
       - 500grams of Rice per day
       - 200grams of Dal per day
       - Bread
       - Tiger/Parle G Biscuits
     - Person C enters or selects
       - 600grams of Rice per day
       - 250grams of Dal per day
       - Nandini Milk TetraPacks
       - Calcium Sandoz Tablets

     #### Food Info:

     | Food Item                   | Required Quantity                  | Monthly Quantity | `Price(Rs.) = RequiredQuamtity * Monthly Quantity * Price per unit` |
     | --------------------------- | ---------------------------------- | ---------------- | ------------------------------------------------------------------- |
     | Rice in Kg per day          | `750+500+600 = 1850grams = 1.85kg` | 30               | `1.85*30*40 = 2220`                                                 |
     | Dal in Kg per day           | `400+200+250 = 850grams = 0.85Kg`  | 30               | `0.85*30*65 = 1657. 5`                                              |
     | Canned Fruits               | 1                                  | 4                | `1*4*100 = 400`                                                     |
     | Tiger/Parle G Biscuits      | 1                                  | 30               | `1*30*3 = 90`                                                       |
     | Nandini Milk TetraPacks 1lt | 2                                  | 8                | `2*8*45 = 720`                                                      |
     | Bread                       | 1                                  | 4                | `1*4*25 = 100`                                                      |
     | Calcium Sandoz Tablets      | 1                                  | 1                | `1*1*500 = 500`                                                     |

     #### Total Amount Required = Sum of Prices = 2220+1657.5+400+90+720+100+500 = Rs. 5687.5

   - **Fetch Food Info By Individual's Id(Aadhar Card Number)**: The User should just enter Individual’s Id and the App should return Individual's Info as output along with the food products that need to be provided to him/her.

     ### Example of Output Fetching Food Info by Individual’s Id

     - Aadhar Card Number: 12345
     - Name: Raju Kumar
     - Gender: Male
     - Age: 37
     - Slum Name: Nayandahalli

       #### Individual's Food Info:

     | Food Item               | Quantity as per Survey | Monthly Quantity |
     | ----------------------- | ---------------------- | ---------------- |
     | Rice                    | 0.75 Kg                | 22.5 Kg          |
     | Dal                     | 0.4 Kg                 | 12 Kg            |
     | Canned Fruits           | 1                      | 4                |
     | Nandini Milk Tetra Pack | 1                      | 8                |

2. **Survey Taker**

   - **Take Survey**

     - The User should be able to fill **multiple surveys for multiple users** as per following inputs.

     ### Inputs

     Input can be in any format or variation but it must include the following.

     - Aadhar Card Number:
     - Name:
     - Gender: (3 Options: Male, Female, Other)
     - Age:
     - Slum Name: (List of Options from Slum Details table/file)
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

   - The records filled by the user should be stored in a Table/file and has to support fields/columns like **Aadhar Card Number, Name, Age, Gender, Slum Id**(fetched from Slum Details Table), **Rice Per Day, Dal Per Day, Special Food Item 1, Special Food Item 2**.
   - After the records are updated in the table, the app should reply with the message **“Thank You for taking the Survey!”**
   - App should also check if this particular user had already taken the survey earlier from the table based on User’s **Aadhar Card Number**. If it is found that the user had already taken the survey earlier, then the app shouldn’t store the user details again in the table/file and reply with the message **“User had already taken the Survey earlier!”**.

### Tables or Files Required

| Serial No. | Table/File Name  | Description                                                                                                                                         |
| ---------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.         | SlumDetails      | Slum details to be added/updated here so as to display the list of slums to select from when Survey Taker fills the survey.                         |
| 2.         | SpecialFoodItems | Special Food Items list to be displayed as options for different Age Groupes taking the Survey.                                                     |
| 3.         | MonthlyFoodStock | Monthly Food Stock to add Prices for the food items & required quantity of items to be provided to an individual for a period of 30days or a month. |
| 4.         | SurveyRecords    | Survey details entered by the Survey Taker should be stored here.                                                                                   |

> Added here are the minimum required Tables/Files. These are just for your reference. You are free to use more tables/files or columns/fields depending upon the need and the approach you take..

