# Schedly AI NodeJS SDK

This is the NodeJS SDK for [Schedly AI](https://schedly.ai).

You can start by installing the package:

```bash
npm install @schedly-ai/node
```

## Usage
```typescript
import SchedlyAI from '@schedly-ai/node';
const schedlyAI = new SchedlyAI('your api key', 'your self-hosted instance (optional)');
```

The available methods are:
- `post(posts: CreatePostDto)` - Schedule a post to Schedly AI
- `postList(filters: GetPostsDto)` - Get a list of posts
- `upload(file: Buffer, extension: string)` - Upload a file to Schedly AI
- `integrations()` - Get a list of connected channels
- `deletePost(id: string)` - Delete a post by ID

Alternatively you can use the SDK with curl, check the [Schedly AI API documentation](https://docs.schedly.ai/public-api) for more information.