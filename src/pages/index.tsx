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
  ButtonGroupProps,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Img,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  TextProps,
  useColorModeValue as mode,
  useColorModeValue,
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

export const Rating = (props: any) => {
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
    &copy; {new Date().getFullYear()} Carvalho & Brum Advogados Associados.
    Todos os direitos Reservados.
  </Text>
);

export const Testimonial = (props: any) => {
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
              <Text color="white">Desenvolvido pela Aru Hub</Text>
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
