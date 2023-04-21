import Head from 'next/head';
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Img,
  Link as ChakraLink,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';
import { Copyright, SocialMediaLinks, Stat, Testimonial } from '@/Components';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Ações de Veículos Apreendidos - Carvalho & Brum | Advogados Associados
        </title>
        <meta
          name="description"
          content="Precisa de ajuda com ações de veículos apreendidos e revisional? Nossos advogados especializados estão prontos para ajudá-lo a obter a melhor solução para o seu caso. Entre em contato conosco agora mesmo para uma consulta gratuita."
        />
        <meta
          name="keywords"
          content="ações de veículos apreendidos, revisional, advogados especializados, consultoria jurídica"
        />
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
                alt="Imagem de um executivo segurando as mangas do terno possivelmente ajustando as abotoaduras."
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
              divider={<StackDivider borderColor="#8F8551" />}
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
                  alt="Imagem de uma pessoa segurando uma chave do seu veículo feliz e realizada com a resolução do seu problema."
                />
              </SimpleGrid>
            </Box>
          </Box>
          <Box as="section">
            <Box
              mx="auto"
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
                  alt="Imagem dos advogados especialistas em revisão de veículos apreendidos do escritório Carvalho & Brum."
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
                <Testimonial name="Maria José C." image="maria.png">
                  Excelente escritório de advocacia! Profissionais altamente
                  qualificados e com excelente atendimento. Super indico!
                  Parabéns Dr. Jorge Brum e equipe.
                </Testimonial>
                <Testimonial name="Thairles ABUD" image="/thairles-abud.png">
                  O Melhor escritório de advocacia de Rio Grande.Equipe
                  altamente preparada e atenciosa.SUPER RECOMENDO!!!!E é bem no
                  centro da cidade!
                </Testimonial>
                <Testimonial name="RodrigoSM" image="/rodrigosm.png">
                  Muito profissional, ótimo atendimento, muito atencioso. E
                  resolve o problema. Estou super satisfeito. Recomendo. Muito
                  bom, excelente profissional .
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
                              É POSSIVEL RECUPERAR MEU VEÍCULO?
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
                        Sim, é possível recuperar um veículo apreendido com a
                        ajuda de um advogado especializado em busca e apreensão
                        de veículos. O método mais comum é o pagamento integral
                        da dívida no prazo de 5 dias após a apreensão, mas há
                        casos em que a apreensão pode ser nula devido a
                        irregularidades cometidas pelo banco. Entre em contato
                        conosco para uma consulta gratuita e proteja seus
                        direitos.
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
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
                              QUANTO TEMPO ATÉ O BANCO LEILOAR (OU VENDER
                              DIRETAMENTE) O VEÍCULO?
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
                        Em 5 dias após a apreensão, se não houver a interposição
                        de defesa, a propriedade e a posse do bem passam a ser
                        do Banco, momento em que ele poderá vender o bem para
                        quem quiser ou leiloá-lo.
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>

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
                              POSSO SER COBRADO DE MAIS ALGUMA COISA PELO BANCO?
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
                        Se o valor obtido pela venda do veículo não for
                        suficiente para quitar a dívida do contrato, o banco
                        pode converter a ação de busca e apreensão em execução
                        para atingir outros bens do devedor. Isso pode resultar
                        na perda não só do veículo, mas também do valor que já
                        foi pago por ele, incluindo a entrada. Além disso, o
                        devedor pode ter seu nome mantido no SPC até a plena
                        quitação da dívida. É importante contar com um advogado
                        especializado em busca e apreensão de veículos para
                        proteger seus direitos e evitar possíveis consequências
                        financeiras negativas.
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>

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
                              A BUSCA E APREENSÃO É LEGAL?
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
                        A busca e apreensão de veículos é um procedimento
                        legalmente previsto, que pode ser requerido pelo banco.
                        No entanto, para que a medida seja válida, o banco
                        precisa cumprir requisitos legais específicos. É
                        importante contar com um advogado especializado em busca
                        e apreensão de veículos para avaliar a legalidade do
                        procedimento e garantir a proteção de seus direitos.
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
          <SimpleGrid
            columns={{
              base: 1,
              md: 3,
            }}
            spacing="4"
          >
            <Stack align="center">
              <Image
                alt="Logomarca do escritório Carvalho e Brum"
                src="/logo.png"
                width={226}
                height={69}
              />
              <Stack direction="row">
                <ChakraLink as={Link} href="#">
                  <Text color="white" fontSize="15px">
                    Termos de Privacidade
                  </Text>
                </ChakraLink>
                <ChakraLink as={Link} href="#">
                  <Text color="white" fontSize="15px">
                    Termos de Uso
                  </Text>
                </ChakraLink>
              </Stack>
            </Stack>

            <Stack spacing="4" align="center" justify="space-between">
              <Copyright
                alignSelf={{ base: 'center', sm: 'start' }}
                textAlign="center"
              />
              <Link href="mailto:alysson.sousa@aruhub.com">
                <Image
                  alt="Logomarca da agencia ARU HUB, quem desenvolveu o design e Layout do site"
                  src="/arusig.svg"
                  width={226}
                  height={32}
                />
              </Link>
            </Stack>
            <Stack spacing="4" align="center">
              <SocialMediaLinks />
              <ChakraLink as={Link} href="mailto:contato@carvalhoebrum.adv.br">
                <Text color="white" fontSize="15px">
                  contato@carvalhoebrum.adv.br
                </Text>
              </ChakraLink>
            </Stack>
          </SimpleGrid>
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
