import Head from 'next/head';
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  BoxProps,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  HStack,
  HTMLChakraProps,
  IconButton,
  Img,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  useColorModeValue as mode,
  useColorModeValue,
  chakra,
  Slide,
  ButtonGroupProps,
  TextProps,
} from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import {
  FaGithub,
  FaLinkedin,
  FaStar,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';

interface StatProps extends BoxProps {
  title: string;
  value: string;
}

export const Stat = (props: StatProps) => {
  const { title, value, ...rest } = props;
  return (
    <Stack
      direction="column-reverse"
      maxW="12rem"
      mx="auto"
      as="dl"
      textAlign="center"
      justify="center"
      {...rest}
    >
      <Box
        as="dt"
        color={useColorModeValue('gray.600', 'whiteAlpha.700')}
        fontWeight="medium"
      >
        {title}
      </Box>
      <Box
        as="dd"
        fontSize="5xl"
        lineHeight="1"
        fontWeight="extrabold"
        color={useColorModeValue('blue.500', 'blue.300')}
      >
        {value}
      </Box>
    </Stack>
  );
};

export const Rating = props => {
  const { value = 5, ...rest } = props;
  return (
    <HStack {...rest}>
      {Array.from({
        length: 5,
      }).map((_, i) => {
        const fade = i + 1 > value;
        return (
          <Box
            as={FaStar}
            color={fade ? 'whiteAlpha.500' : 'black'}
            fontSize="xl"
            key={i}
          />
        );
      })}
    </HStack>
  );
};

export const SocialMediaLinks = (props: ButtonGroupProps) => (
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
    <IconButton
      as="a"
      href="#"
      aria-label="LinkedIn"
      icon={<FaLinkedin fontSize="20px" />}
    />
    <IconButton
      as="a"
      href="#"
      aria-label="GitHub"
      icon={<FaGithub fontSize="20px" />}
    />
    <IconButton
      as="a"
      href="#"
      aria-label="Twitter"
      icon={<FaTwitter fontSize="20px" />}
    />
  </ButtonGroup>
);

export const Copyright = (props: TextProps) => (
  <Text fontSize="sm" color="white" {...props}>
    &copy; {new Date().getFullYear()} Carvalho & Brum Advogados Associados. Todos os direitos Reservados.
  </Text>
);

export const Logo = (props: HTMLChakraProps<'svg'>) => (
  <chakra.svg
    color="accent"
    height="8"
    width="auto"
    viewBox="0 0 482 89"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M76.7528 14.9002C83.7459 22.6904 88 32.9894 88 44.282C88 68.5826 68.3005 88.282 44 88.282C35.6893 88.282 27.9167 85.978 21.2863 81.9737L15.3884 87.0521C14.5187 87.801 13.2784 86.7338 13.8892 85.7622L22.556 71.9745L22.5485 71.9656C22.5514 71.9678 22.5544 71.9701 22.5573 71.9724L35.1199 51.9871C35.5385 51.3211 35.0599 50.4549 34.2733 50.4549H19.8769C18.9505 50.4549 18.5222 49.304 19.2231 48.6983L60.245 13.2494C55.3897 10.7025 49.8631 9.26163 44 9.26163C24.6588 9.26163 8.97959 24.9408 8.97959 44.282C8.97959 52.5687 11.8577 60.1831 16.6689 66.1802L11.7467 74.211C4.45724 66.3591 0 55.8411 0 44.282C0 19.9815 19.6995 0.282043 44 0.282043C52.6142 0.282043 60.6502 2.75747 67.4355 7.03577L72.5813 2.58901C73.4507 1.83776 74.6934 2.9057 74.0815 3.87819L53.421 36.7143C53.002 37.3802 53.4806 38.2468 54.2674 38.2468H69.3753C70.3026 38.2468 70.7305 39.3996 70.0278 40.0046L28.5503 75.719C33.2103 78.0136 38.4546 79.3025 44 79.3025C63.3412 79.3025 79.0204 63.6233 79.0204 44.282C79.0204 36.2682 76.3286 28.883 71.7999 22.9813L76.7528 14.9002Z"
      fill="url(#paint0_linear)"
    />
    <g fill="currentColor">
      <path d="M128.976 37.5702C134.889 37.5702 137.525 41.4056 138.404 44.8414L146.714 41.8051C145.116 35.5726 139.363 29.0206 128.896 29.0206C117.709 29.0206 109 37.6501 109 49.6356C109 61.4613 117.709 70.3305 129.136 70.3305C139.363 70.3305 145.196 63.6986 147.034 57.6259L138.884 54.6695C138.005 57.6259 135.208 61.8608 129.136 61.8608C123.303 61.8608 118.269 57.4661 118.269 49.6356C118.269 41.8051 123.303 37.5702 128.976 37.5702Z" />
      <path d="M161.338 46.2797C161.498 41.3257 164.294 37.4903 169.408 37.4903C175.241 37.4903 177.399 41.3257 177.399 46.1199V69.132H186.667V44.5218C186.667 35.9721 182.033 29.1005 172.445 29.1005C168.369 29.1005 163.975 30.5387 161.338 33.9746V11.282H152.069V69.132H161.338V46.2797Z" />
      <path d="M192.358 58.5848C192.358 64.7373 197.392 70.3305 205.542 70.3305C211.854 70.3305 215.69 67.1344 217.527 64.178C217.527 67.2942 217.847 68.8923 217.927 69.132H226.556C226.477 68.7325 226.077 66.4153 226.077 62.8995V43.563C226.077 35.8123 221.523 29.0206 209.537 29.0206C199.949 29.0206 193.876 35.0133 193.157 41.7252L201.627 43.6429C202.026 39.7276 204.743 36.6114 209.617 36.6114C214.731 36.6114 216.968 39.2482 216.968 42.5242C216.968 43.8826 216.329 45.0012 214.092 45.3208L204.104 46.839C197.472 47.7978 192.358 51.6332 192.358 58.5848ZM207.3 63.0593C203.624 63.0593 201.627 60.6622 201.627 58.0254C201.627 54.8293 203.944 53.2313 206.82 52.7518L216.968 51.2337V52.9915C216.968 60.5823 212.493 63.0593 207.3 63.0593Z" />
      <path d="M270.521 30.2191H258.216L243.274 45.96V11.282H234.085V69.132H243.274V58.2651L248.069 53.2312L259.495 69.132H270.841L254.541 46.6792L270.521 30.2191Z" />
      <path d="M297.125 29.9794C296.725 29.8995 295.766 29.7397 294.648 29.7397C289.534 29.7397 285.219 32.2167 283.381 36.4516V30.2191H274.352V69.132H283.621V50.5944C283.621 43.3232 286.897 39.1683 294.088 39.1683C295.047 39.1683 296.086 39.2482 297.125 39.408V29.9794Z" />
      <path d="M299.347 58.5848C299.347 64.7373 304.381 70.3305 312.531 70.3305C318.843 70.3305 322.679 67.1344 324.516 64.178C324.516 67.2942 324.836 68.8923 324.916 69.132H333.546C333.466 68.7325 333.066 66.4153 333.066 62.8995V43.563C333.066 35.8123 328.512 29.0206 316.526 29.0206C306.938 29.0206 300.865 35.0133 300.146 41.7252L308.616 43.6429C309.015 39.7276 311.732 36.6114 316.606 36.6114C321.72 36.6114 323.957 39.2482 323.957 42.5242C323.957 43.8826 323.318 45.0012 321.081 45.3208L311.093 46.839C304.461 47.7978 299.347 51.6332 299.347 58.5848ZM314.289 63.0593C310.613 63.0593 308.616 60.6622 308.616 58.0254C308.616 54.8293 310.933 53.2313 313.809 52.7518L323.957 51.2337V52.9915C323.957 60.5823 319.483 63.0593 314.289 63.0593Z" />
    </g>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M357 13.282C354.791 13.282 353 15.0729 353 17.282V72.282C353 74.4912 354.791 76.282 357 76.282H478C480.209 76.282 482 74.4912 482 72.282V17.282C482 15.0729 480.209 13.282 478 13.282H357ZM439.391 58.6521C441.463 59.6041 443.885 60.0801 446.657 60.0801C449.429 60.0801 451.837 59.6041 453.881 58.6521C455.953 57.6721 457.661 56.3981 459.005 54.8301C460.349 53.2341 461.357 51.5121 462.029 49.6641C462.701 47.8161 463.037 46.0381 463.037 44.3301V43.4061C463.037 41.5021 462.687 39.6261 461.987 37.7781C461.287 35.9021 460.251 34.2081 458.879 32.6961C457.507 31.1841 455.799 29.9801 453.755 29.0841C451.711 28.1601 449.345 27.6981 446.657 27.6981C443.969 27.6981 441.603 28.1601 439.559 29.0841C437.515 29.9801 435.807 31.1841 434.435 32.6961C433.063 34.2081 432.027 35.9021 431.327 37.7781C430.655 39.6261 430.319 41.5021 430.319 43.4061V44.3301C430.319 46.0381 430.641 47.8161 431.285 49.6641C431.957 51.5121 432.965 53.2341 434.309 54.8301C435.653 56.3981 437.347 57.6721 439.391 58.6521ZM450.563 52.8981C449.415 53.4021 448.113 53.6541 446.657 53.6541C445.201 53.6541 443.899 53.4021 442.751 52.8981C441.603 52.3941 440.609 51.6941 439.769 50.7981C438.957 49.9021 438.341 48.8661 437.921 47.6901C437.501 46.5141 437.291 45.2541 437.291 43.9101C437.291 42.4821 437.501 41.1801 437.921 40.0041C438.341 38.8001 438.957 37.7641 439.769 36.8961C440.609 36.0001 441.603 35.3141 442.751 34.8381C443.899 34.3621 445.201 34.1241 446.657 34.1241C448.113 34.1241 449.415 34.3621 450.563 34.8381C451.711 35.3141 452.691 36.0001 453.503 36.8961C454.343 37.7641 454.973 38.8001 455.393 40.0041C455.841 41.1801 456.065 42.4821 456.065 43.9101C456.065 45.2541 455.855 46.5141 455.435 47.6901C455.015 48.8661 454.385 49.9021 453.545 50.7981C452.733 51.6941 451.739 52.3941 450.563 52.8981ZM380.52 59.2821V50.5041H384.846C387.45 50.5041 389.676 50.0701 391.524 49.2021C393.4 48.3341 394.828 47.1021 395.808 45.5061C396.816 43.8821 397.32 41.9781 397.32 39.7941V39.1221C397.32 36.8821 396.816 34.9641 395.808 33.3681C394.828 31.7721 393.4 30.5401 391.524 29.6721C389.676 28.8041 387.45 28.3701 384.846 28.3701H380.52H379.68H373.632V59.2821H380.52ZM385.182 44.5401H380.52V34.3341H385.182C386.246 34.3341 387.156 34.5441 387.912 34.9641C388.696 35.3561 389.298 35.9441 389.718 36.7281C390.138 37.4841 390.348 38.3941 390.348 39.4581C390.348 40.4661 390.138 41.3621 389.718 42.1461C389.298 42.9021 388.696 43.4901 387.912 43.9101C387.156 44.3301 386.246 44.5401 385.182 44.5401ZM401.646 59.2821V28.3701H406.686H408.534H413.7C416.248 28.3701 418.46 28.7621 420.336 29.5461C422.212 30.3021 423.654 31.4361 424.662 32.9481C425.67 34.4601 426.174 36.3641 426.174 38.6601V39.3321C426.174 41.6001 425.656 43.4901 424.62 45.0021C423.633 46.4557 422.229 47.5601 420.409 48.3152L428.232 59.2821H420.252L413.554 49.4541H408.534V59.2821H401.646ZM414.246 44.0361H408.534V34.2081H414.246C415.254 34.2081 416.122 34.4181 416.85 34.8381C417.606 35.2301 418.18 35.8041 418.572 36.5601C418.992 37.2881 419.202 38.1421 419.202 39.1221C419.202 40.1021 418.992 40.9701 418.572 41.7261C418.18 42.4541 417.606 43.0281 416.85 43.4481C416.122 43.8401 415.254 44.0361 414.246 44.0361Z"
      fill="url(#paint1_linear)"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="44"
        y1="-1.78854"
        x2="44"
        y2="91.3879"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="currentColor" />
        <stop offset="1" stopColor="currentColor" />
      </linearGradient>
      <linearGradient
        id="paint1_linear"
        x1="417.5"
        y1="13.282"
        x2="417.5"
        y2="76.282"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="currentColor" />
        <stop offset="1" stopColor="currentColor" />
      </linearGradient>
    </defs>
  </chakra.svg>
);

export const Testimonial = props => {
  const { image, company, name, children, ...rest } = props;
  return (
    <Stack
      spacing={6}
      h="100%"
      rounded="2xl"
      shadow="md"
      py={{
        base: '6',
        md: '6',
      }}
      px={{
        base: '6',
        md: '7',
      }}
      bg={mode('#C5B358', '#C5B358')}
      color={mode('gray.800', 'gray.300')}
      {...rest}
    >
      <Box
        fontSize={{
          base: 'md',
          md: 'lg',
        }}
        flex="1"
      >
        {children}
        <Rating mt="10" value={4} />
      </Box>
      <HStack
        spacing={{
          base: 3,
          md: 5,
        }}
      >
        <Img objectFit="cover" rounded="full" boxSize={14} src={image} />
        <Flex direction="column">
          <Text fontWeight="bold">{name}</Text>
          <Text fontSize="sm" fontWeight="medium" opacity={0.7}>
            {company}
          </Text>
        </Flex>
      </HStack>
    </Stack>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Carvalho & Brum | Advogados Associados</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>
      <Flex direction="column">
        <Flex
          className="background"
          w="100%"
          h={{ base: '600px', md: '810px', lg: '810px', xl: '810px' }}
          bgSize="cover"
          bgPosition="center"
          direction="column"
        >
          {/*Logo*/}
          <Container maxW="container.lg">
            <Flex height="80px" mt={10} align="center">
              <Image
                alt="Logomarca da empresa"
                src="/logo.png"
                width={226}
                height={69}
              />
            </Flex>
          </Container>
          {/*End Logo*/}

          {/*Hero Section*/}
          <Container maxW="container.lg">
            <Flex justifyContent="space-between">
              <Box mt={{ base: '50px', md: '120px' }}>
                <Box mb={4}>
                  <Heading
                    as="h1"
                    fontWeight="bold"
                    fontFamily="heading"
                    color="white"
                    maxW="450px"
                    fontSize={{ base: 'xl', md: '3xl', xl: '4xl' }}
                    mb={4}
                  >
                    Não sofra com a busca e apreensão de seu veículo
                  </Heading>
                  <Heading
                    as="h2"
                    size="md"
                    color="white"
                    fontWeight="normal"
                    lineHeight={1.5}
                  >
                    Proteja seu patrimônio e defenda seus direitos <br /> com a
                    ajuda de um advogado especialista!
                  </Heading>
                </Box>
                <Button
                  backgroundColor="#25D366"
                  size="md"
                  rightIcon={<FaWhatsapp color="white" size={20} />}
                  variant="solid"
                  color="white"
                  _hover={{ backgroundColor: '#128C7E', color: 'white' }}
                >
                  FALE CONOSCO
                </Button>
              </Box>

              <Img
                htmlWidth="440px"
                htmlHeight="786px"
                width={440}
                height={{
                  md: 786,
                }}
                display={{ base: 'none', sm: 'none', md: 'block', lg: 'block' }}
                src="/executive.png"
                alt="state of the art speaker"
              />
            </Flex>
            {/*End Hero Section*/}
          </Container>
        </Flex>

        <Container maxW="container.lg">
          <Box
            mt={{ base: '-32', sm: '-28', md: '-32' }}
            as="section"
            maxW="7xl"
            mx="auto"
            bgColor="#C5B358"
            px={{ base: '6', md: '8' }}
            py={{ base: '12', md: '20' }}
          >
            <Stack
              spacing="8"
              direction={{ base: 'column', md: 'row' }}
              divider={<StackDivider />}
            >
              <Stat
                title="veículos apreendidos por parcelas em atraso"
                value="2,4 milhões"
              />
              <Stat title="Veículos apreendidos" value="+89 mil" />
              <Stat
                title="Veículos apreendidos por falta de pagamento."
                value="517 mil"
              />
            </Stack>
          </Box>
        </Container>

        <Container maxW="container.lg">
          <Box as="section">
            <Box
              mx="auto"
              // px={{
              //   base: '6',
              //   md: '12',
              //   lg: '20',
              // }}
              py={{
                base: '12',
                md: '20',
              }}
            >
              <SimpleGrid
                columns={{
                  base: 1,
                  md: 2,
                }}
                spacing="10"
              >
                <Box>
                  <Heading size="xl" mb="4" fontWeight="extrabold">
                    COMO RECUPERAR SEU VEÍCULO:
                  </Heading>
                  <Text
                    fontSize={{
                      md: 'lg',
                    }}
                    mb="6"
                    maxW="md"
                    color={mode('gray.600', 'gray.400')}
                  >
                    Ótima notícia! Você pode e tem o direito de recorrer da ação
                    de busca e apreensão e, se agir dentro do prazo, há grandes
                    chances de recuperar o seu veículo. É fundamental contar com
                    a orientação e representação adequadas para proteger seus
                    direitos e buscar as melhores soluções para o seu caso.
                  </Text>
                </Box>
                <Img
                  htmlWidth="500px"
                  htmlHeight="320px"
                  height={{
                    md: '320px',
                  }}
                  objectFit="cover"
                  src="/people-2.png"
                  alt="state of the art speaker"
                />
              </SimpleGrid>
            </Box>
          </Box>
          <Box as="section">
            <Box
              mx="auto"
              // px={{
              //   base: '6',
              //   md: '12',
              //   lg: '20',
              // }}
              py={{
                base: '12',
                md: '20',
              }}
            >
              <SimpleGrid
                columns={{
                  base: 1,
                  md: 2,
                }}
                spacing="10"
              >
                <Img
                  htmlWidth="500px"
                  htmlHeight="320px"
                  height={{
                    md: '320px',
                  }}
                  objectFit="cover"
                  src="/people-1.png"
                  alt="state of the art speaker"
                />
                <Box>
                  <Heading size="xl" mb="4" fontWeight="extrabold">
                    CONTE CONOSCO!
                  </Heading>
                  <Text
                    fontSize={{
                      md: 'lg',
                    }}
                    mb="6"
                    maxW="md"
                    color={mode('gray.600', 'gray.400')}
                  >
                    Estamos aqui para ajudar na rápida recuperação do seu
                    veículo. Somos especialistas em defesa contra Busca e
                    Apreensão, e revisão de contratos de financiamento de
                    veículos. Não sofra mais com juros abusivos de bancos.
                  </Text>
                </Box>
              </SimpleGrid>
            </Box>
          </Box>
        </Container>

        <Flex className="background-2" w="100%" bgSize="cover" mt={40}>
          <Container maxW="container.lg">
            <Box
              // mt={{ base: '-40', sm: '-40', md: '-16' }}
              mt="-64"
              as="section"
              maxW="7xl"
              mx="auto"
              px={{ base: '6', md: '8' }}
              py={{ base: '12', md: '20' }}
            >
              <Stack spacing="8" direction={{ base: 'column', md: 'row' }}>
                <Testimonial
                  name="Kemi Alex"
                  company="VFX Artist & Film-maker"
                  image="https://images.unsplash.com/photo-1603610515737-193e0b423983?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjk4fHxsYWR5JTIwaGVhZHNob3QlMjBzbWlsaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                >
                  Sed sed risus pretium quam vulputate dignissim. Ornare quam
                  viverra orci sagittis. Integer vitae justo eget magna
                  fermentum iaculis eu non diam
                </Testimonial>
                <Testimonial
                  name="Kemi Alex"
                  company="VFX Artist & Film-maker"
                  image="https://images.unsplash.com/photo-1603610515737-193e0b423983?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjk4fHxsYWR5JTIwaGVhZHNob3QlMjBzbWlsaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                >
                  Sed sed risus pretium quam vulputate dignissim. Ornare quam
                  viverra orci sagittis. Integer vitae justo eget magna
                  fermentum iaculis eu non diam
                </Testimonial>
                <Testimonial
                  name="Kemi Alex"
                  company="VFX Artist & Film-maker"
                  image="https://images.unsplash.com/photo-1603610515737-193e0b423983?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjk4fHxsYWR5JTIwaGVhZHNob3QlMjBzbWlsaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                >
                  Sed sed risus pretium quam vulputate dignissim. Ornare quam
                  viverra orci sagittis. Integer vitae justo eget magna
                  fermentum iaculis eu non diam
                </Testimonial>
              </Stack>
            </Box>

            <Flex
              height="100%"
              w="100%"
              h="608px"
              justify="center"
              align="center"
            >
              <Box
                justifyContent="center"
                alignItems="center"
                textAlign="center"
              >
                <Heading
                  size="2xl"
                  color="white"
                  letterSpacing="tight"
                  fontWeight="extrabold"
                  lineHeight="normal"
                >
                  Não deixe que a busca e apreensão do seu veículo te cause mais
                  preocupação.
                </Heading>
                <Text fontSize="lg" mt="4" fontWeight="medium" color="white">
                  Entre em contato agora mesmo com um de nossos advogados
                  especialistas
                </Text>
                <Box py={6}>
                  <Button
                    backgroundColor="#25D366"
                    size="md"
                    rightIcon={<FaWhatsapp color="white" size={20} />}
                    variant="solid"
                    color="white"
                    _hover={{ backgroundColor: '#128C7E', color: 'white' }}
                  >
                    FALE CONOSCO
                  </Button>
                </Box>
              </Box>
            </Flex>
          </Container>
        </Flex>

        <Flex w="100%" pb={40}>
          <Container maxW="container.lg">
            <Flex height="100%" w="100%" justify="center" direction="column">
              <Flex
                w="100%"
                alignItems="center"
                justifyContent="center"
                py={10}
              >
                <Text fontWeight="bold" fontSize="48px">
                  FAQ
                </Text>
              </Flex>

              <Accordion allowToggle>
                <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton
                          borderTop="none"
                          borderBottomWidth={1}
                          borderBottomColor="#959595"
                        >
                          <Box as="span" flex="1" textAlign="left">
                            <Text fontWeight="bold" fontSize="33px">
                              {' '}
                              Section 2 title
                            </Text>
                          </Box>
                          {isExpanded ? (
                            <AiOutlineMinusCircle fontSize="30px" />
                          ) : (
                            <AiOutlinePlusCircle fontSize="30px" />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              </Accordion>
            </Flex>
          </Container>
        </Flex>
      </Flex>

      <Box
        as="footer"
        role="contentinfo"
        mx="auto"
        px={{ base: '4', md: '8' }}
        py={8}
        bgColor="#13213A"
      >
        <Container maxW="container.lg">
          <Stack>
            <Stack
              direction="row"
              spacing="4"
              align="center"
              justify="space-between"
            >
              <Image
                alt="Logomarca da empresa"
                src="/logo.png"
                width={226}
                height={69}
              />
              <SocialMediaLinks />
              <Text color='white' >
                Desenvolvido pela Aru Hub
              </Text>
            </Stack>
            <Copyright alignSelf={{ base: 'center', sm: 'start' }} />
          </Stack>
        </Container>
      </Box>

      {/*<Slide direction="bottom" in={true} style={{ zIndex: 10 }}>*/}
      {/*  <Box*/}
      {/*    p="40px"*/}
      {/*    color="white"*/}
      {/*    mt="4"*/}
      {/*    bg="teal.500"*/}
      {/*    rounded="md"*/}
      {/*    shadow="md"*/}
      {/*  >*/}
      {/*    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium*/}
      {/*    assumenda atque consectetur cum, delectus eligendi est facere incidunt*/}
      {/*    iure labore molestias neque nihil quaerat quos, soluta tenetur ullam*/}
      {/*    ut vitae.*/}
      {/*    <Button>Aceitar</Button>*/}
      {/*  </Box>*/}
      {/*</Slide>*/}
    </>
  );
}
