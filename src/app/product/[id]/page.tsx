import { notFound } from 'next/navigation';
import { getProductById } from '../../ProductGrid';
import Link from 'next/link';
import Image from 'next/image';

export default function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const product = getProductById(id);

  if (!product) return notFound();

  return (
    <div className="min-h-screen bg-[#c4c4c4] py-16">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-8 flex flex-col md:flex-row gap-12">
        {/* Product Image */}
        <div className="flex-1 flex items-center justify-center">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="object-contain w-full max-w-xs h-auto rounded-lg bg-[#e0e0e0]"
          />
        </div>
        {/* Product Details */}
        <div className="flex-1 flex flex-col justify-center">
          <span className="inline-block mb-4 px-3 py-1 bg-black text-white text-xs font-bold tracking-widest">
            SAVE {product.discount}%
          </span>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-2xl font-bold">RS. {product.price.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
            <span className="text-gray-500 line-through text-lg">RS. {product.originalPrice.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
          </div>
          <p className="mb-8 text-gray-700">{product.description}</p>
          {/* Add to Cart button temporarily removed to fix build error */}
          <Link href="/" className="text-gray-600 hover:underline">&larr; Back to Home</Link>
        </div>
      </div>
    </div>
  );
} 