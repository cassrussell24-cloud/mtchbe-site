
import React from 'react';

export interface Project {
  id: number;
  title: string;
  category: string;
  summary: string;
  imageUrl: string;
}

export interface Capability {
  id: number;
  title:string;
  description: string;
  icon: React.ReactNode;
}

export interface DispatchPost {
  id: number;
  title: string;
  imageUrl: string;
}
