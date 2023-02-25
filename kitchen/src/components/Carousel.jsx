import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
 
  Container,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import ProfileCard from './ProfileCard';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {

  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'Eileen Johnson',
      text:"Executive Chef, USA",
      pic:"https://s3-alpha-sig.figma.com/img/d438/2ee4/2195d72e6c690ea04b68ce4b2a97bc30?Expires=1678060800&Signature=BvgbQoh3gPr6p3u8Ab5An95wB5hBOXH7Tp~eVXuYfkiEJH250mDjfZPaEHDnAfmllNzCOowzFW4weUYFjGBLplq~oDazndbJjmBXR~pTtj1VH2HcZdgEc-L89TgvUEjByhNcquKpVp0rgvgUoTUGu2leStTXL-zp3TFLuMh3Luuz3wztDBnp08Ge2m~UgI8Ls~~qu2rmYQnEhzPDL2RRRZ3SMBsdD-CF0S73dks~Q0rSIQ0a2vSh6P1VMYZ326KzErO~Mj266jbsccg2IF59ArU2~PFJC9uY3m~ixj29iLg3P81SoC5YlyImye7zHBIOrOBzKntYULHUu749IJJiRQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        image:
        'https://s3-alpha-sig.figma.com/img/9da3/c897/6f55d2af127e46d89b7a5b5ffefd5fc5?Expires=1678060800&Signature=gFA3yI6e6I~NWi~zSP9UYibJZSnm2v8B9bPrljcA0mN4dZeu0aKI68DeAqzvjxLJb0RvUy3D8mwoTCiXFHf548RbZzhy7s3qMav1SwCZMk64IwSbU4y8SeHRX~j5p1VsesJHAUeRTrXqCvRQLZVTHSzxcRI1JyeMi~Da0Cyb72AVjsjF4wYCFr02~wd-2iNosVsPxrZ7IFbIF1PIq-Oet09o1A89Sxo4dyum4w9BTorvLhyIvNDGkYPDLANz1OBxUmG~xba57PrS5cjykH2bi6pWSFHb4m6KvfiIMmVfozbMj3MW0PZfoT3fNMghabOqAbBPykHDWrl85kXLWCbT4g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      title: 'Robert Downey Jr',
      text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        pic:"https://s3-alpha-sig.figma.com/img/3f96/8a42/723f628a56edeb6515d28504a3d2170c?Expires=1678060800&Signature=K2I5LhTA16aPh9z5j0mGvdc8wesSLCGpGEPh5eqFyFTug0pEJRDggHnPHUeCn5iB73VhFGDyNgdLB6I4-7AjeBmF2Wh9hbTJH2r6UM~Eb8IDvK7K8vrRBV0QdK8DiozPloeRPPOWRn7qg9EhOIMUM3z61-KV~QnhUHdVFW48107v1v3H7RqM2jtoxHht~GfHd3yyOTeNGPfU5NZuglSYlVlixztbnE2X~Vx3vhWUrqs0jKqBD0eqk1JHfBBq95045wTN7prXK-bwHsU8FGFCuHHIyH90qGHjB~Oby98uULICFKMq2YfArdvOhAorgzmUp5Ra-RG00~fsaoRL5b5oXg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      image:
        'https://s3-alpha-sig.figma.com/img/bfe4/7245/ddb5f574cc5caa7991dc3f591fad9496?Expires=1678060800&Signature=TxkzbH0pLmvDK5NNNrJz8pdpNnLkAoNicB2knCli48RN84OGcWUngjeUqD100282hh--cyHxJ9NKjQ5lRqb0bzwfV~jGnv9dMmnLcYkVgCaL2VHZkx7EWmFiUg-48XpLHU1FK5rnzgGcYBxlsJvPbVyr-ER2ElZxupX-w0bMNl6Vv3cgMHWM-JC9~bPPE8OW9aCDM59s~B90jWF59WCaisB3~1k~Rj6TVCQ6zO1zAw6~YMSFFapBryRQKOYEVmhhFM9-375qkiHerLhq4j3W9f55cavHYWAc7gzP5t~e4u~IFdK9fOsDfjLfJW7oQ6sSkuZlfxfvWUTXUiLdGf~AzQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      title: 'Amanda Dority',
      text:
        "Sous Chef, India",
        pic:"https://s3-alpha-sig.figma.com/img/e515/5f48/ac441500e4bdc40c06b86dc0d399be72?Expires=1678060800&Signature=CvVA9sCmPoUmVBILATWMqhKLpxzQqwsGAfPlaed8osJ0VoARXhUqFVKhRKPIm-E0cFbSrpIvN9m7MHVLMtmQ1tr8ySyKs2D1z1~EBy7LcAyVTiSFZWgUQkGz5vLUWNZ41XW70Yfs0aHsFVbN53bcjNfL0zsIsgNFeakSVGcv5cFgvoLxdctmoP0uSI05h-D1JBbeA-j3g0YvfORxV8PDUK5dEcsuZ1ncfQicaRlMtrfwNEePbBOcGw4Ji85ol0j2Mbt2Cu6G53AG2lcxiCk~pYE~05t1A3roPEKL9Np24MXllCAFgbbZkFEyPdVlF5VRolvmEQtvkhnXtkalqiIBQw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      image:
        'https://s3-alpha-sig.figma.com/img/749d/a788/04eec019f700b151c1c59b96683121f5?Expires=1678060800&Signature=Vn4mooBQFnM3GhY6tp1w85DLVAM6LegqWR54FtIFlYx~VipUt2hAXiecJsnO9Q7q~5dbtPSLKaCGQGCDoSXfhcGyjCvEMlkVSMNcGRmjRBvyJEfwcHuhxDG4uZsHzMbFdIHizlOXwDYShcSScj-vBGCcOLlReY45FrS-kYNqR-aEZPyTW--3oLkJ-DQWtlfbhcM-IyBtOEJcasZd0ihwUh6ku8CPFTB-4VZAvaAawaGWJf6oP7IMXD6PY1Ky~rfHTyVSj254bn~zaZOgSmzpKccNxDfEhbHhAN64KFUva-FE~4IEJ00-ar8J0bXfE8i7lMGTX2WebL-YtYQUA1diwA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
  ];

  return (
    <Box
      position={'relative'}
      height={'500px'}
      width={'full'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'6xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}>
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="40%"
                transform="translate(0, -50%)">
                <ProfileCard
                title={card.title}
                pic={card.pic}
                text={card.text}
                />
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}