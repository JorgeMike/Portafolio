import React from 'react';
import error from "@/assets/404.png";
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <Image
          src={error}
          alt="Error 404"
          className="img-fluid mb-4"
          style={{ maxWidth: "300px" }}
        />
        <h1 className="display-4 text-dark mb-3">Oops! Page Not Found!</h1>
        <p className="lead text-secondary mb-4">
          It looks like this little corner of the web doesn&apos;t exist.
        </p>
        <Link href="/" className="btn btn-primary btn-lg">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
