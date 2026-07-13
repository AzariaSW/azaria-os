const uploadConfig = Object.freeze({

    image:{

        maxSize:5 * 1024 * 1024,

        mimeTypes:[

            "image/jpeg",

            "image/png",

            "image/webp"

        ]

    },

    document:{

        maxSize:10 * 1024 * 1024,

        mimeTypes:[

            "application/pdf"

        ]

    }

});

export default uploadConfig;