
export interface Guid {
    rendered: string;
}

export interface Title {
    rendered: string;
}

export interface Content {
    rendered: string;
    protected: boolean;
}

export interface Excerpt {
    rendered: string;
    protected: boolean;
}

export interface Self {
    href: string;
}

export interface Collection {
    href: string;
}

export interface About {
    href: string;
}

export interface Author {
    embeddable: boolean;
    href: string;
}

export interface Reply {
    embeddable: boolean;
    href: string;
}

export interface VersionHistory {
    count: number;
    href: string;
}

export interface WpAttachment {
    href: string;
}

export interface WpTerm {
    taxonomy: string;
    embeddable: boolean;
    href: string;
}

export interface Cury {
    name: string;
    href: string;
    templated: boolean;
}

export interface Links {
    self: Self[];
    collection: Collection[];
    about: About[];
    author: Author[];
    replies: Reply[];
    'version-history': VersionHistory[];
    'wp:attachment': WpAttachment[];
    'wp:term': WpTerm[];
    curies: Cury[];
}

export interface AvatarUrls {
    24: string;
    48: string;
    96: string;
}

export interface Self2 {
    href: string;
}

export interface Collection2 {
    href: string;
}

export interface Links2 {
    self: Self2[];
    collection: Collection2[];
}

export interface Author2 {
    id: number;
    name: string;
    url: string;
    description: string;
    link: string;
    slug: string;
    avatar_urls: AvatarUrls;
    _links: Links2;
}

export interface Embedded {
    author: Author2[];
    replies: any[][];
    'wp:term': any[][];
}

export interface Post {
    id: number;
    date: Date;
    date_gmt: Date;
    guid: Guid;
    modified: Date;
    modified_gmt: Date;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: Title;
    content: Content;
    excerpt: Excerpt;
    author: number;
    featured_media: number;
    comment_status: string;
    ping_status: string;
    sticky: boolean;
    template: string;
    format: string;
    meta: any[];
    categories: number[];
    tags: any[];
    _links: Links;
    _embedded: Embedded;
}
