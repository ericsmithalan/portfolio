import React, { Component } from 'react';
import {
    MdVerticalAlignTop,
    MdArrowBack,
    MdWork,
    MdStars,
    MdCode,
    MdImage,
    MdComment,
    MdInfo,
} from 'react-icons/md';

export default {
  home: [
    {
      href: 'javascript:void(0)',
      to: null,
      image: MdVerticalAlignTop,
      title: 'top',
      scrollTo: 'heroContainer',
    },
    {
      href: 'javascript:void(0)',
      to: null,
      image: MdWork,
      title: 'work',
      scrollTo: 'cardsContainer',
    },
    {
      href: 'javascript:void(0)',
      to: null,
      image: MdCode,
      title: 'code',
      scrollTo: 'codeContainer',
    },
    {
      href: 'javascript:void(0)',
      to: null,
      image: MdStars,
      title: 'skills',
      scrollTo: 'skillsContainer',
    },
    {
      href: 'javascript:void(0)',
      to: null,
      image: MdInfo,
      title: 'about me',
      scrollTo: 'aboutContainer',
    }
  ],
  project: [
    {
      href: 'javascript:void(0)',
      to: null,
      image: MdVerticalAlignTop,
      title: 'top',
      scrollTo: 'containerOne',
    },
    {
      href: 'javascript:void(0)',
      to: null,
      image: MdComment,
      title: 'details',
      scrollTo: 'containerTwo',
    },
    {
      href: 'javascript:void(0)',
      to: null,
      image: MdImage,
      title: 'examples',
      scrollTo: 'containerThree',
    },
    {
      href: 'javascript:void(0)',
      to: null,
      image: MdStars,
      title: 'skills',
      scrollTo: 'containerFour',
    },
  ],
};
