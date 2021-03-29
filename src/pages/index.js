import * as React from 'react';
import logoPath from '../images/logo.svg';
import tw, { styled, theme } from 'twin.macro';
import Layout from '../components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faSearch,
  faTimes,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { faCommentAlt, faUser } from '@fortawesome/free-regular-svg-icons';
import {
  faFacebook,
  faYoutube,
  faVk,
  faTelegram,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { Dialog, DialogOverlay, DialogContent } from '@reach/dialog';
import cn from 'classnames';
import { mq } from '../util/ui';

// markup
const BlackButton = styled.button(
  tw`text-black hover:text-gray-800 active:text-gray-600 inline-flex items-center px-2 py-2 text-base font-medium no-underline hover:no-underline active:no-underline`,
);
BlackButton.rightSiblingStyle = tw`-ml-2`;

const Header = ({ children }) => {
  return (
    <header
      css={mq({
        height: headerHeight,
      })}>
      <div
        css={[
          tw`fixed top-0 left-0 right-0 bg-transparent flex items-center`,
          mq({
            height: headerHeight,
            marginLeft: headerXSpace,
            marginRight: headerXSpace,
          }),
        ]}>
        {children}
      </div>
    </header>
  );
};
const headerXSpace = [
  theme`spacing.5`,
  theme`spacing.5`,
  theme`spacing.8`,
  theme`spacing.8`,
];

const headerHeight = [
  theme`spacing.12`,
  theme`spacing.12`,
  theme`spacing.20`,
  theme`spacing.20`,
];

// TODO: On small screen widths slightly wider than hamburger button and header x spacing
const xsFirstThirdWidth = `calc(${headerXSpace[0]} * 2 + ${theme`spacing.4`})`;
const firstThirdWidth = [xsFirstThirdWidth, xsFirstThirdWidth, '370px', '35vw'];

const slideOverWidth = firstThirdWidth.map((w, i) => {
  if (i < 2) {
    return '100vw';
  } else {
    return `calc(${w} + ${headerXSpace[i]})`;
  }
});

const hamburgerLeft = [
  headerXSpace[0],
  headerXSpace[1],
  ...firstThirdWidth.slice(2),
];

const footerHeight = headerHeight;

const SearchField = () => {
  const [searchText, setSearchText] = React.useState('');

  return (
    <div tw="relative">
      <MaterialBlackInput
        type="search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        tw="pr-8"
      />
      <div tw="absolute inset-y-0 right-0 flex items-center">
        <BlackButton type="submit">
          <FontAwesomeIcon
            tw="fill-current w-4 h-4"
            icon={faArrowRight}
            aria-hidden="true"
          />
        </BlackButton>
      </div>
    </div>
  );
};

const NavLinkWithCounter = ({
  linkElement,
  counterText,
  counterStyle,
  className,
}) => {
  return (
    <div tw="relative" className={className}>
      {linkElement}
      <span
        css={[
          tw`text-gray-200 absolute left-full top-0 -translate-y-full pl-0.5 text-sm`,
          counterStyle,
        ]}>
        {counterText}
      </span>
    </div>
  );
};

const SearchDialog = ({ className, dialogStyle }) => {
  const [showDialog, setShowDialog] = React.useState(false);

  return (
    <div tw="relative" className={className}>
      <BlackButton onClick={() => setShowDialog((x) => !x)} type="button">
        <FontAwesomeIcon
          icon={faSearch}
          tw="fill-current w-4 h-4"
          aria-hidden="true"
        />
      </BlackButton>
      <Dialog
        isOpen={showDialog}
        onDismiss={() => setShowDialog(false)}
        role="dialog"
        aria-modal="true"
        aria-labelledby="search-headline"
        css={[
          tw`origin-top-right absolute right-0 mt-2 w-72 shadow-lg bg-white focus:outline-none`,
          dialogStyle,
        ]}>
        <h1 tw="sr-only">Search</h1>
        <div tw="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div tw="absolute top-5 right-4">
            <BlackButton onClick={() => setShowDialog(false)} type="button">
              <span tw="sr-only">Закрыть</span>
              <FontAwesomeIcon
                aria-hidden="true"
                tw="fill-current w-4 h-4"
                icon={faTimes}
              />
            </BlackButton>
          </div>
          <form tw="mt-4">
            <p>
              <label htmlFor="search">Что бы вы хотели найти?</label>
              <SearchField />
            </p>
          </form>
        </div>
      </Dialog>
    </div>
  );
};

const MaterialBlackInput = styled.input(
  tw`block w-full sm:text-sm border-0 border-b-2 focus:border-0 focus:ring-0 focus:border-b-2 border-black focus:border-blue-500`,
);

const HeaderCustomerButtons = ({ className }) => {
  return (
    <div
      css={tw`flex items-center justify-end space-x-2`}
      className={className}>
      <BlackButton type="button" tw="lg:mr-8 whitespace-nowrap">
        <FontAwesomeIcon
          icon={faCommentAlt}
          tw="fill-current w-4 h-4"
          aria-hidden="true"
        />
        <span tw="hidden lg:block ml-2.5">Живой чат</span>
      </BlackButton>
      <SearchDialog
        dialogStyle={mq({
          marginRight: headerXSpace,
        })}
      />
      <BlackButton type="button">
        <FontAwesomeIcon
          icon={faUser}
          tw="fill-current w-4 h-4"
          aria-hidden="true"
        />
      </BlackButton>
      <BlackButton type="button">
        <FontAwesomeIcon
          icon={faShoppingCart}
          tw="fill-current w-4 h-4"
          aria-hidden="true"
        />
      </BlackButton>
    </div>
  );
};

const IndexPage = () => {
  const [showPopover, setShowPopover] = React.useState(false);

  return (
    <Layout>
      <Header>
        <div
          tw="flex items-center space-x-2"
          css={mq({
            width: firstThirdWidth,
          })}>
          <NavLinkWithCounter
            tw="hidden md:block"
            linkElement={
              <BlackButton as="a" href="#about" tw="whitespace-nowrap">
                Каталог
              </BlackButton>
            }
            counterText={'56'}
            counterStyle={BlackButton.rightSiblingStyle}
          />
          <NavLinkWithCounter
            tw="hidden md:block"
            linkElement={
              <BlackButton as="a" href="#our-works" tw="whitespace-nowrap">
                Специальные предложения
              </BlackButton>
            }
            counterText={'123'}
            counterStyle={BlackButton.rightSiblingStyle}
          />
        </div>
        <div
          css={[
            tw`flex-none flex items-center`,
            mq({
              marginLeft: headerXSpace,
            }),
          ]}>
          <a href={'/'}>
            <img
              src={logoPath}
              width="74px"
              height="32px"
              alt="Логотип сайта PRO Фурнитура"
            />
          </a>
        </div>
        <HeaderCustomerButtons
          css={[
            tw`flex-none ml-auto`,
            {
              '&>*': tw`hidden sm:inline-flex`,
              '&>:last-child': tw`inline-flex`,
            },
          ]}
        />
      </Header>
      <main></main>
      {/* TODO: popover from @headlessui/react*/}
      <DialogOverlay
        isOpen={showPopover}
        onDismiss={() => setShowPopover((x) => !x)}
        tw="fixed inset-0 overflow-hidden z-10">
        <div css={tw`absolute inset-0 overflow-hidden`}>
          <div
            tw="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          />
          <div tw="absolute inset-y-0 left-0 max-w-full flex">
            <DialogContent
              css={[
                tw`relative w-screen`,
                mq({
                  maxWidth: slideOverWidth,
                }),
              ]}
              aria-labelledby="main-menu-headline"
              role="dialog"
              aria-modal="true"
              id={'main-menu-slide-over'}>
              <div tw="h-full flex flex-col bg-white shadow-xl overflow-y-auto overflow-x-hidden">
                <h2 tw="sr-only" id="main-menu-headline">
                  Главное меню
                </h2>
                <div
                  css={[
                    tw`relative flex-1`,
                    mq({
                      marginLeft: headerXSpace,
                      marginRight: headerXSpace,
                    }),
                  ]}>
                  <div tw="absolute inset-0 flex flex-col">
                    <div
                      css={[
                        tw`flex-none md:hidden flex items-center justify-end`,
                        mq({ height: headerHeight }),
                      ]}>
                      <HeaderCustomerButtons tw="flex-none" />
                    </div>
                    <div
                      tw={
                        'flex-none absolute top-1/2 transform -translate-y-1/2'
                      }>
                      <ul tw="space-y-3">
                        <li>
                          <BlackButton as={'a'} href={'#'}>
                            Каталог
                          </BlackButton>
                        </li>
                        <li>
                          <BlackButton as={'a'} href={'#'}>
                            Специальные предложения
                          </BlackButton>
                        </li>
                        <li>
                          <BlackButton as={'a'} href={'#'}>
                            Доставка
                          </BlackButton>
                        </li>
                        <li>
                          <BlackButton as={'a'} href={'#'}>
                            Контакты
                          </BlackButton>
                        </li>
                      </ul>
                    </div>
                    <div
                      css={[
                        tw`flex-none mt-auto flex items-center justify-start`,
                        mq({
                          height: footerHeight,
                        }),
                      ]}>
                      <ul
                        css={[
                          {
                            '&>*': {
                              flex: 'none',
                            },
                          },
                          tw`flex items-center space-x-2`,
                        ]}>
                        <li>
                          <BlackButton href={'#'}>
                            <FontAwesomeIcon
                              icon={faFacebook}
                              tw="fill-current w-4 h-4"
                            />
                          </BlackButton>
                        </li>
                        <li>
                          <BlackButton href={'#'}>
                            <FontAwesomeIcon
                              icon={faInstagram}
                              tw="fill-current w-4 h-4"
                            />
                          </BlackButton>
                        </li>
                        <li>
                          <BlackButton href={'#'}>
                            <FontAwesomeIcon
                              icon={faVk}
                              tw="fill-current w-4 h-4"
                            />
                          </BlackButton>
                        </li>
                        <li>
                          <BlackButton href={'#'}>
                            <FontAwesomeIcon
                              icon={faTelegram}
                              tw="fill-current w-4 h-4"
                            />
                          </BlackButton>
                        </li>
                        <li>
                          <BlackButton href={'#'}>
                            <FontAwesomeIcon
                              icon={faYoutube}
                              tw="fill-current w-4 h-4"
                            />
                          </BlackButton>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </DialogContent>
          </div>
        </div>
      </DialogOverlay>
      <div
        css={[
          tw`fixed transform md:-translate-x-full -translate-y-1/2 z-20`,
          mq({
            top: headerHeight.map((h) => `calc(${h} / 2)`),
            left: hamburgerLeft,
          }),
        ]}>
        <BlackButton
          type="button"
          onClick={() => {
            setShowPopover((x) => !x);
          }}
          className={cn(
            'hamburger hamburger--collapse',
            showPopover && 'is-active',
          )}
          aria-label="Menu"
          aria-controls="main-menu-slide-over"
          aria-expanded={showPopover ? 'true' : 'false'}>
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
          <span tw="sr-only">Главное меню</span>
        </BlackButton>
      </div>
    </Layout>
  );
};

export default IndexPage;
