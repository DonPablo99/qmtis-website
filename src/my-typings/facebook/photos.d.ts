declare interface FacebookPhoto {
    created_time: string;
    name: string;
    id: string;
    url: string;
}

declare interface FacebookPhotosResponse {
    data: FacebookPhoto[];
    paging: {
        cursors: {
            before: string;
            after: string;
        };
        next: string;
    };
}
