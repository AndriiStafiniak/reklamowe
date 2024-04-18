import { toElectronics } from "../../../routs";
import {
  Image,
  StyledPremiumBrandItemGrid,
  StyledPremiumBrandLink,
} from "./style";

const items = Array.from({ length: 12 }, (_, i) => i);
const prixton = require("../../../images/prixton.jpg");
const elevate = require("../../../images/elevate.jpg");
const herschel = require("../../../images/herschel.jpg");
const rfx = require("../../../images/rfx.jpg");
const scx = require("../../../images/scx.jpg");
const seasons = require("../../../images/seasons.jpg");
const parker = require("../../../images/parker.png");
const banner = require("../../../images/brands-premium-banner.png");
const camelbak = require("../../../images/camelbak.jpg");
const malfini = require("../../../images/malfini.jpg");
const waterman = require("../../../images/waterman.png");
const ocean = require("../../../images/OceanBottle.jpg");

export const Brands = () => {
  const images = [
    banner,
    parker,
    prixton,
    elevate,
    herschel,
    rfx,
    scx,
    seasons,
    camelbak,
    malfini,
    waterman,
    ocean,
  ];
  const PremiumBrandItem = ({ image }) => <Image src={image} alt="Brand" />;
  const PremiumBrandItemGrid = ({ children }) => (
    <StyledPremiumBrandItemGrid>{children}</StyledPremiumBrandItemGrid>
  );
  const PremiumBrand = ({ children, to }) => (
    <StyledPremiumBrandLink to={to}>{children}</StyledPremiumBrandLink>
  );
  return (
    <PremiumBrandItemGrid>
      {items.map((item) => (
        <PremiumBrand key={item} to={toElectronics()}>
          <PremiumBrandItem image={images[item]} />
        </PremiumBrand>
      ))}
    </PremiumBrandItemGrid>
  );
};
