import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import Slider from "react-slick";

const useStyles = makeStyles((theme) => ({
  title: {
    margin: "3em auto 1em auto",
    width: "90%",
    display: "block",
  },
  para: {
    fontFamily: "'Open Sans', sans-serif",
    lineHeight: "1.7",
    width: "90%",
    margin: "0 auto",
    display: "block",
  },
}));

const Home = () => {
  const classes = useStyles();
  const settings_carousal = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    className: "slides",
  };

  const settings_slider = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div style={{ margin: "auto 1em" }}>
      <div style={{ width: "96%", margin: "0 auto", display: "block" }}>
        <Slider {...settings_slider}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>

      <Typography
        variant="h4"
        gutterBottom
        mt={2}
        component="div"
        classes={{ root: classes.title }}
      >
        Doggo ipsum smol
      </Typography>

      <Typography body classes={{ root: classes.para }}>
        Doggo ipsum smol borkdrive pats vvv, doing me a frighten long doggo.
        boof floofs. Wrinkler stop it fren yapper many pats ur givin me a spook
        shibe most angery pupper I have ever seen, I am bekom fat ruff heck most
        angery pupper I have ever seen very good spot. Wrinkler shibe puggorino
        boofers borkf tungg, borkf vvv wow such tempt. fat boi you are doing me
        the shock.{" "}
      </Typography>
      <Typography body classes={{ root: classes.para }}>
        Very jealous pupper vvv floofs, stop it fren. Super chub boof stop it
        fren heckin good boys and girls clouds long doggo very jealous pupper,
        what a nice floof doggo porgo tungg. Lotsa pats extremely cuuuuuute
        shoober super chub bork, fat boi very hand that feed shibe woofer.
        Pupperino extremely cuuuuuute ur givin me a spook pupperino ur givin me
        a spook much ruin diet, big ol noodle horse tungg. Boofers many pats
        blop pupper pats puggo, many pats he made many woofs ruff stop it fren.
        Much ruin diet pats thicc corgo you are doin me a concern, noodle horse
        porgo very hand that feed shibe. vvv. Clouds porgo maximum borkdrive he
        made many woofs doggo, length boy smol borking doggo with a long snoot
        for pats shooberino adorable doggo, heckin very jealous pupper ur givin
        me a spook. Stop it fren long bois doggorino stop it fren, tungg ruff
        tungg, you are doin me a concern extremely cuuuuuute. Long doggo long
        woofer doggorino doge long woofer sub woofer fluffer, smol fat boi you
        are doin me a concern snoot long water shoob.{" "}
      </Typography>
      <Typography body classes={{ root: classes.para }}>
        Clouds floofs h*ck, you are doing me a frighten. Boof big ol the
        neighborhood pupper, clouds. Doggo boofers noodle horse dat tungg tho,
        extremely cuuuuuute shooberino. Fluffer shoob corgo you are doing me a
        frighten, big ol pupper. maximum borkdrive shooberino. wrinkler super
        chub long bois. Waggy wags aqua doggo waggy wags you are doing me the
        shock, waggy wags puggorino. Doge borkf clouds fat boi extremely
        cuuuuuute, doggo the neighborhood pupper. Woofer boofers doggo mlem,
        shibe. Tungg boof fluffer, big ol pupper. Long water shoob yapper dat
        tungg tho noodle horse long woofer ruff, fluffer borkdrive borking
        doggo.
      </Typography>

      <Typography
        variant="h4"
        gutterBottom
        mt={2}
        component="div"
        classes={{ root: classes.title }}
      >
        Clouds porgo maximum
      </Typography>

      <div style={{ width: "96%", margin: "3em auto", display: "block" }}>
        <Slider {...settings_carousal}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Home;
