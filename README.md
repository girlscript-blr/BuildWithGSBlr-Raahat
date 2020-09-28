# Survey Taker Application
[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/girlscript-blr)
[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/girlscript-blr)
[![Made With Love](https://img.shields.io/badge/Made%20With-Love-orange.svg)](https://github.com/girlscript-blr)

Nothing lasts forever – even the insights from your last survey go stale after a while. One way to keep your survey results fresh and actionable is by running your survey again and creating a multi wave tracking study, also known as tracker or tracking survey. 

A tracking survey is a survey that asks the same questions across an interval of time, which allows you to “track” the changes from one deployment to the next and find trends over a certain period.

Each time you send your survey, whether it’s annually, quarterly, or more frequently is called a “wave.” Comparing survey results across waves will show trends and changing attitudes that can either prove your decisions are solid or indicate it’s time to change course.

## Technology Stack Used

![HTML](https://img.shields.io/badge/frontend-html-orange.svg?logo=html5&style=flat-square) 
![CSS](https://img.shields.io/badge/frontend-css-yellowgreen.svg?logo=css3&style=flat-square)
![JavaScript](https://img.shields.io/badge/backend-javascript-blue.svg?logo=javascript&style=flat-square) 
![Bulma](https://img.shields.io/badge/framework-bulma-purple.svg?logo=bulma&style=flat-square) 
![React](https://img.shields.io/badge/framework-react-lightgray.svg?logo=react&style=flat-square) 

- Front End - **HTML**, **CSS** , **JavaScript**
- Framewrok - **Bulma**
- Library - **React** 


## Problem Statements

Mr. Banku Yadav has just started with his NGO. During this Covid-19 pandemic, he decided to do a fundraiser to help the people in need. He found a slum nearby named Nayandahalli where he saw people who were in need of food and ration kits.

Before starting with the fundraiser he thought of exploring the slum and thereby conducted a survey. When Banku Yadav reached Nayandahalli he found out that there were a lot of people and collecting each and everyone’s record manually would become a tedious process. So he thought of creating an app that will make his task easier in conducting the survey. Banku Yadav is not a tech-savvy person to build a survey app.

It is your time to rise and shine as you have a golden opportunity to help Banku Yadav create an app for conducting his survey. Banku Yadav’s app proved to be successful in estimating the quantity of each food item along with its price and the total amount required to be funded based on the total number of people.

The state government noticed Banku Yadav’s efforts and got impressed with his idea. The government wants him to do the same for other slums as well. So Banku Yadav approaches you for updating the app. Now you should automate the Survey App so that records of more slums and a variety of food items can be maintained. While collecting survey records of each individual you should also collect their slum’s name. The app should store details in the form of a database or files.

Your task is to create an App that should support the following functionality:

The User should be able to fill **multiple surveys for multiple users** as per following inputs.

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
<br />

| Age Group                            | Special Food Options                                                           |
| ------------------------------------ | ------------------------------------------------------------------------------ |
| Infants: Below 2years                | Cerelac, Amul powder, Nandini Milk TetraPacks                                  |
| Children: Between 3 to 18 years      | Bread, Tiger/Parle G, Nandini Milk TetraPacks, Canned Fruits, Canned Veggies   |
| Old Age: Above 70 years              | Canned Fruits, Canned Veggies, Nandini Milk TetraPacks, Medicine Packs         |
| Adult Female: Between 18 to 69 years | Canned Fruits, Canned Veggies, Nandini Milk TetraPacks, Calcium Sandoz Tablets |
| Adult Male: Between 18 to 69 years   | Canned Fruits, Canned Veggies, Nandini Milk TetraPacks                         |
| Adult Other: Between 18 to 69 years  | Canned Fruits, Canned Veggies, Nandini Milk TetraPacks, Calcium Sandoz Tablets |

<br />

- The records filled by the user should be stored in a Table/file and has to support fields/columns like **Aadhar Card Number, Name, Age, Gender, Slum Id**(fetched from Slum Details Table), **Rice Per Day, Dal Per Day, Special Food Item 1, Special Food Item 2**.
- After the records are updated in the table, the app should reply with the message **“Thank You for taking the Survey!”**
- App should also check if this particular user had already taken the survey earlier from the table based on User’s **Aadhar Card Number**. If it is found that the user had already taken the survey earlier, then the app shouldn’t store the user details again in the table/file and reply with the message **“User had already taken the Survey earlier!”**.

<br />

### Tables or Files Required

| Serial No. | Table/File Name  | Description                                                                                                                                         |
| ---------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.         | SlumDetails      | Slum details to be added/updated here so as to display the list of slums to select from when Survey Taker fills the survey.                         |
| 2.         | SpecialFoodItems | Special Food Items list to be displayed as options for different Age Groupes taking the Survey.                                                     |
| 3.         | MonthlyFoodStock | Monthly Food Stock to add Prices for the food items & required quantity of items to be provided to an individual for a period of 30days or a month. |
| 4.         | SurveyRecords    | Survey details entered by the Survey Taker should be stored here.   

<br />



## General Guidelines


## Note

Since you are here, you should most definitely consider joining us on this ride. If you still have any doubts, listen to Richard Stallman's perspective on [Free software, free society](https://www.tedxgeneva.net/talks/richard-stallman-free-software-free-society/)

Don’t forget to fill the [participation form](https://tinyurl.com/codewithgsblr) 📃 to take part in the program, if not already done. Start contributing!😊

## Resources

For all the young duckings, we have posted some useful resources to go through and understand GitHub.

- [Bulma Documentation](https://bulma.io/)
- [Git Documentation](https://git-scm.com/docs)
- [GitHub Guides](https://guides.github.com/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [React Routing](https://www.youtube.com/watch?v=Law7wfdg_ls&t=1778s)

## References

Here are a few references for you :

- One of the most important things in the FOSS world are your commits, check here to know all about it - [GitCommitMessages - OpenStack](https://wiki.openstack.org/wiki/GitCommitMessages)

***Glad to see you here! Show some love by [starring](https://github.com/girlscript-blr/code-with-gsblr-covid-a-thon/) this repo.***

-----

```

  if (isAwesome) {
    // thanks in advance :p
    starThisRepository();
  }

```
