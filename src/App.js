import React, { useState, useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";

import StepCounter from "./Components/Home/Stepcounter";
import StepWizzard from "./Components/Wizzard/StepWizzard";
import history from "./Components/History";

import { useDarkMode } from "./DarkLightMode/useDarkMode";
import { lightTheme, darkTheme } from "./DarkLightMode/Themes";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Styles/GlobalStyling";

import Landing from "./Components/Landing/Landing";
import YourActivity from "./Components/CollectedData/YourActivity";
import ChooseOrganisation from "./Components/Organisations/ChooseOrganisation";
import ThankYou from "./Components/ThankYou/ThankYou";
import InfoOrganisation from "./Components/Organisations/InfoOrganisation";
import { pastActivity } from "./Data/PastActivity";
import SignIn from "./Components/SignInSignUp/SignIn";
import SignUp from "./Components/SignInSignUp/SignUp";
import AccountPage from "./Components/Account/AccountPage";

// Jag började med min grund, att skapa alla komponenter jag behövde utifrån prototypen.
//Jag skapade sedan routes inkl history.push funktionen för vald organisation.
// Skapade en grundläggande funktionalitet på alla vyer för att även ha några värden att kunna styla.

//Sedan fokuserade jag på stylingen, skapade efter vår prototyp, dark/light mode och min globala styling var steg ett.
//Vi hade efter användartesterna fått fram information om möjlig förbättring. Jag valde att göra några nya vyer i Figma och implementerade detta sist.

function App() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);

  const [points, setPoints] = useState(8);
  const [sumPoints, setSumPoints] = useState();

  const [allActivity, setAllActivity] = useState(
    JSON.parse(localStorage.getItem("allActivity")) || []
  );

  const [allSteps, setAllSteps] = useState();
  const [counter, setCounter] = useState(8000);

  const [footPrint, setFootPrint] = useState();
  const [ice, setIce] = useState();

  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const monthNames = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const weekdays = ["Mån", "Tis", "Ons", "Tors", "Fre", "Lör", "Sön"];
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth();
  let weekday = newDate.getDay();
  let currentMonth = monthNames[month];
  let currentDay = weekdays[weekday - 1];

  //Uträkning av minskade utsläpp pga steg istället för bilkörning. Användarens minskade "carbon-footprints".
  //Och uträkning av hur mycket is som skulle ha smält om användaren tagit bilen istället.
  let arrSteps = [];
  let sum = 0;

  pastActivity.map((day) => {
    let all = day.steps;
    return arrSteps.push(all);
  });
  for (var i = 0; i < arrSteps.length; i++) {
    sum += arrSteps[i];
  }

  let sumStepsGram = Math.round(sum * 0.03);

  let sumIce = footPrint * 0.000003;
  let fixedNum = sumIce.toFixed(4);
  useEffect(() => {
    localStorage.setItem("allActivity", JSON.stringify(pastActivity));
    setFootPrint(sumStepsGram);
    setIce(fixedNum);
  }, [sumStepsGram, fixedNum]);

  // Summering av steg och poäng.
  // Alla poäng respektive steg läggs in i olika arrayer som sedan adderas med hjälp av en for-loop och läggs i två olika states.
  useEffect(() => {
    let sumP = 0;
    let sumSteps = 0;
    let arrPoints = [];
    let arrSteps = [];

    allActivity &&
      allActivity.map((day) => {
        let allP = day.points;
        let allS = day.steps;
        arrPoints.push(allP);
        arrSteps.push(allS);
      });
    for (let i = 0; i < arrPoints.length; i++) {
      sumP += arrPoints[i];
    }
    for (let j = 0; j < arrSteps.length; j++) {
      sumSteps += arrSteps[j];
    }
    setSumPoints(sumP);
    setAllSteps(sumSteps);
  }, [allActivity, setAllSteps, setSumPoints]);

  return (
    <Router history={history}>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <div>
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route path="/signin">
              <SignIn
                setUserName={setUserName}
                userName={userName}
                setPassword={setPassword}
                password={password}
              />
            </Route>
            <Route path="/signup">
              <SignUp
                name={name}
                setName={setName}
                setUserName={setUserName}
                userName={userName}
                setPassword={setPassword}
                password={password}
              />
            </Route>
            <Route path="/wizzard">
              <StepWizzard />
            </Route>
            <Route path="/home">
              {" "}
              <StepCounter
                ice={ice}
                points={points}
                setPoints={setPoints}
                modalOpen={modalOpen}
                modalOpen2={modalOpen2}
                setModalOpen={setModalOpen}
                setModalOpen2={setModalOpen2}
                currentDay={currentDay}
                currentMonth={currentMonth}
                date={date}
                counter={counter}
                setCounter={setCounter}
                footPrint={footPrint}
              />
            </Route>
            <Route path="/activity">
              <YourActivity
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
                points={points}
                setPoints={setPoints}
                sumPoints={sumPoints}
                setSumPoints={setSumPoints}
                currentMonth={currentMonth}
                date={date}
                counter={counter}
                setCounter={setCounter}
                allSteps={allSteps}
                setAllSteps={setAllSteps}
                allActivity={allActivity}
                setAllActivity={setAllActivity}
              />
            </Route>
            <Route
              path="/organisations/:organisation"
              component={InfoOrganisation}
            />
            <Route path="/organisations">
              {" "}
              <ChooseOrganisation
                sumPoints={sumPoints}
                setSumPoints={setSumPoints}
              />{" "}
            </Route>
            <Route path="/account">
              {" "}
              <AccountPage theme={theme} themeToggler={themeToggler} />{" "}
            </Route>

            <Route path="/thankyou">
              {" "}
              <ThankYou
                sumPoints={sumPoints}
                setSumPoints={setSumPoints}
                footPrint={footPrint}
                setAllActivity={setAllActivity}
                allActivity={allActivity}
              />{" "}
            </Route>
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
